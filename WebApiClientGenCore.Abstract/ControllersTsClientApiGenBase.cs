﻿using Fonlow.Poco2Client;
using Fonlow.TypeScriptCodeDom;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Fonlow.Web.Meta;
using System.Diagnostics;
using System.Collections.Specialized;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Create CodeDOM based on Web API controllers, and generate TypeScript codes of the client API of the controllers
	/// </summary>
	public abstract class ControllersTsClientApiGenBase
	{
		protected CodeCompileUnit TargetUnit { get; private set; }

		readonly CodeGenConfig apiSelections;
		protected JSOutput jsOutput;
		readonly ClientApiTsFunctionGenAbstract apiFunctionGen; //to be injected in ctor of derived class.
		readonly IDocCommentTranslate poco2CsGen;
		readonly IPoco2Client poco2TsGen;

		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsOutput"></param>
		/// <param name="apiFunctionGen"></param>
		/// <remarks>The client data types should better be generated through SvcUtil.exe with the DC option. The client namespace will then be the original namespace plus suffix ".client". </remarks>
		protected ControllersTsClientApiGenBase(JSOutput jsOutput, ClientApiTsFunctionGenAbstract apiFunctionGen, IDocCommentTranslate poco2CsGen)
		{
			this.jsOutput = jsOutput ?? throw new ArgumentNullException(nameof(jsOutput));
			this.apiFunctionGen = apiFunctionGen;
			this.apiSelections = jsOutput.ApiSelections;
			this.poco2CsGen = poco2CsGen;
			TargetUnit = new CodeCompileUnit();
			poco2TsGen = CreatePoco2TsGen(jsOutput.ClientNamespaceSuffix);

			TsCodeGenerationOptions options = TsCodeGenerationOptions.Instance;
			options.BracingStyle = "JS";
			options.IndentString = "\t";
			options.CamelCase = jsOutput.CamelCase ?? false;

		}

		/// <summary>
		/// jQuery and NG2 have slightly different fine grained types for returns
		/// </summary>
		/// <returns></returns>
		abstract protected IPoco2Client CreatePoco2TsGen(string clientNamespaceSuffix);

		protected virtual CodeObjectHelper CreateCodeObjectHelper(bool asModule)
		{
			return new CodeObjectHelper(asModule);
		}

		/// <summary>
		/// Generate and save TS codes into a file.
		/// </summary>
		public void Save()
		{
			var provider = new TypeScriptCodeProvider(new Fonlow.TypeScriptCodeDom.TsCodeGenerator(CreateCodeObjectHelper(jsOutput.AsModule)));
			using StreamWriter writer = new(jsOutput.JSPath);
			provider.GenerateCodeFromCompileUnit(TargetUnit, writer, TsCodeGenerationOptions.Instance);
		}

		/// <summary>
		/// Generate TS CodeDom of the client API for ApiDescriptions.
		/// </summary>
		/// <param name="webApiDescriptions">Web Api descriptions exposed by Configuration.Services.GetApiExplorer().ApiDescriptions</param>
		public void CreateCodeDom(WebApiDescription[] webApiDescriptions)
		{
			if (webApiDescriptions == null)
			{
				throw new ArgumentNullException(nameof(webApiDescriptions));
			}

			AddBasicReferences();

			GenerateTsFromPoco();

			//controllers of ApiDescriptions (functions) grouped by namespace
			var controllersGroupByNamespace = webApiDescriptions.Select(d => d.ActionDescriptor.ControllerDescriptor)
				.Distinct()
				.GroupBy(d => d.ControllerType.Namespace)
				.OrderBy(k => k.Key);// order by namespace

			//Create client classes mapping to controller classes
			CodeTypeDeclaration[] newControllerClassesCreated = null;
			foreach (var grouppedControllerDescriptions in controllersGroupByNamespace)
			{
				var clientNamespaceText = (grouppedControllerDescriptions.Key + jsOutput.ClientNamespaceSuffix).Replace('.', '_');
				var clientNamespace = new CodeNamespace(clientNamespaceText);

				TargetUnit.Namespaces.Add(clientNamespace);//namespace added to Dom

				newControllerClassesCreated = grouppedControllerDescriptions
					.OrderBy(d => d.ControllerName)
					.Select(d =>
					{
						var controllerFullName = d.ControllerType.Namespace + "." + d.ControllerName;
						if (apiSelections.ExcludedControllerNames != null && apiSelections.ExcludedControllerNames.Contains(controllerFullName))
							return null;

						string containerClassName = GetContainerClassName(d.ControllerName);
						return CreateControllerClientClass(clientNamespace, containerClassName);
					}).Where(d => d != null).ToArray();//add classes into the namespace
			}

			foreach (var d in webApiDescriptions)
			{
				var controllerNamespace = d.ActionDescriptor.ControllerDescriptor.ControllerType.Namespace;
				var controllerName = d.ActionDescriptor.ControllerDescriptor.ControllerName;
				var controllerFullName = controllerNamespace + "." + controllerName;
				if (apiSelections.ExcludedControllerNames != null && apiSelections.ExcludedControllerNames.Contains(controllerFullName))
					continue;

				var existingClientClass = LookupExistingClassInCodeDom(controllerNamespace, GetContainerClassName(controllerName));
				System.Diagnostics.Trace.Assert(existingClientClass != null);

				var apiFunction = apiFunctionGen.CreateApiFunction(d, poco2TsGen, poco2CsGen, this.jsOutput);
				existingClientClass.Members.Add(apiFunction);
			}

			RefineOverloadingFunctions();

			if (newControllerClassesCreated != null) //If no controllers is picked up, this could be null.
			{
				foreach (var c in newControllerClassesCreated)
				{
					AddHelperFunctionsInClass(c);
				}
			}
			else
			{
				System.Diagnostics.Trace.TraceWarning("No client API is created since no controller is picked up.");
			}
		}

		void GenerateTsFromPoco()
		{
			if (apiSelections.DataModelAssemblyNames != null)
			{
				var allAssemblies = AppDomain.CurrentDomain.GetAssemblies();
				var assemblies = allAssemblies.Where(d => apiSelections.DataModelAssemblyNames.Any(k => k.Equals(d.GetName().Name, StringComparison.CurrentCultureIgnoreCase)))
					.OrderBy(n => n.FullName)
					.ToArray();
				var cherryPickingMethods = apiSelections.CherryPickingMethods.HasValue ? (CherryPickingMethods)apiSelections.CherryPickingMethods.Value : CherryPickingMethods.DataContract;
				foreach (var assembly in assemblies)
				{
					var xmlDocFileName = DocComment.DocCommentLookup.GetXmlPath(assembly);
					var docLookup = Fonlow.DocComment.DocCommentLookup.Create(xmlDocFileName);
					poco2TsGen.CreateCodeDomInAssembly(assembly, cherryPickingMethods, docLookup, jsOutput.DataAnnotationsToComments);
				}
			}

			if (apiSelections.DataModels != null)
			{
				var allAssemblies = AppDomain.CurrentDomain.GetAssemblies();
				foreach (var dm in apiSelections.DataModels)
				{
					var assembly = allAssemblies.FirstOrDefault(d => d.GetName().Name.Equals(dm.AssemblyName, StringComparison.CurrentCultureIgnoreCase));
					if (assembly != null)
					{
						var xmlDocFileName = DocComment.DocCommentLookup.GetXmlPath(assembly);
						var docLookup = Fonlow.DocComment.DocCommentLookup.Create(xmlDocFileName);
						var cherryPickingMethods = dm.CherryPickingMethods.HasValue ? (CherryPickingMethods)dm.CherryPickingMethods.Value : CherryPickingMethods.DataContract;
						var dataAnnotationsToComments = (dm.DataAnnotationsToComments.HasValue && dm.DataAnnotationsToComments.Value) // dm explicitly tell to do
							|| (!dm.DataAnnotationsToComments.HasValue && jsOutput.DataAnnotationsToComments);
						poco2TsGen.CreateCodeDomInAssembly(assembly, cherryPickingMethods, docLookup, dataAnnotationsToComments);
					}
				}
			}
		}

		string GetContainerClassName(string controllerName)
		{
			return controllerName + (jsOutput.ContainerNameSuffix ?? String.Empty);
		}

		/// <summary>
		/// Lookup existing CodeTypeDeclaration created.
		/// </summary>
		/// <param name="clrNamespaceText"></param>
		/// <param name="containerClassName"></param>
		/// <returns></returns>
		CodeTypeDeclaration LookupExistingClassInCodeDom(string clrNamespaceText, string containerClassName)
		{
			var refined = (clrNamespaceText + jsOutput.ClientNamespaceSuffix).Replace('.', '_');
			for (int i = 0; i < TargetUnit.Namespaces.Count; i++)
			{
				var ns = TargetUnit.Namespaces[i];
				if (ns.Name == refined)
				{
					for (int k = 0; k < ns.Types.Count; k++)
					{
						var c = ns.Types[k];
						if (c.Name == containerClassName)
							return c;
					}
				}
			}

			return null;
		}

		/// <summary>
		/// Find over loading API functions, and rename them according to parameter names, since TS and TS do not support overloading functions.
		/// </summary>
		void RefineOverloadingFunctions()
		{
			for (int i = 0; i < TargetUnit.Namespaces.Count; i++)
			{
				var ns = TargetUnit.Namespaces[i];
				for (int k = 0; k < ns.Types.Count; k++)
				{
					var td = ns.Types[k];
					RefineOverloadingFunctionsOfType(td);
				}
			}

		}

		void RefineOverloadingFunctionsOfType(CodeTypeDeclaration codeTypeDeclaration){
			List<CodeMemberMethod> methods = new();
			for (int m = 0; m < codeTypeDeclaration.Members.Count; m++)
			{
				if (codeTypeDeclaration.Members[m] is CodeMemberMethod method)
				{
					methods.Add(method);
				}
			}

			if (methods.Count > 1)//worth of checking overloading
			{
				var candidates = from m in methods group m by m.Name into grp where grp.Count() > 1 select grp.Key;
				foreach (var candidateName in candidates)
				{
					var overloadingMethods = methods.Where(d => d.Name == candidateName).ToArray();
					//System.Diagnostics.Debug.Assert(overloadingMethods.Length > 1);
					foreach (var item in overloadingMethods) //Wow, 5 nested loops, plus 2 linq expressions
					{
						RenameCodeMemberMethodWithParameterNames(item);
					}
				}
			}
		}

		static string ToTitleCase(string s)
		{
			return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
		}

		/// <summary>
		/// suffix is based on parameter declaration expression, with name and optionally CLR type name.
		/// </summary>
		/// <param name="d"></param>
		/// <returns></returns>
		string ToMethodNameSuffix(CodeParameterDeclarationExpression d)
		{
			var pn = ToTitleCase(d.Name);
			if (pn.EndsWith("?"))
			{
				pn = pn.Substring(0, pn.Length - 1);
			}

			if (jsOutput.MethodSuffixWithClrTypeName && (d.UserData.Contains(UserDataKeys.ParameterDescriptor)))
			{
				var pt = d.UserData[UserDataKeys.ParameterDescriptor] as ParameterDescriptor;
				return $"{pn}Of{pt.ParameterType.Name}";
			}

			return $"{pn}Of{d.Type.BaseType}";
		}

		void RenameCodeMemberMethodWithParameterNames(CodeMemberMethod method)
		{
			if (method.Parameters.Count == 0)
				return;

			var parameterNamesInTitleCase = method.Parameters.OfType<CodeParameterDeclarationExpression>()
				.Where(k => k.Name != "headersHandler?")
				.Select(d => ToMethodNameSuffix(d)).ToList();

			parameterNamesInTitleCase = parameterNamesInTitleCase.Select(item =>
			{
				if (item.EndsWith('?'))
				{
					return item.Substring(0, item.Length - 1);
				}

				return item;
			}).ToList();

			var lastParameter = parameterNamesInTitleCase.LastOrDefault();//for JQ output
			if ("callback".Equals(lastParameter, StringComparison.CurrentCultureIgnoreCase))
			{
				parameterNamesInTitleCase.RemoveAt(parameterNamesInTitleCase.Count - 1);
			}

			if (parameterNamesInTitleCase.Count > 0)
			{
				method.Name += $"By{String.Join("And", parameterNamesInTitleCase)}";
			}
		}

		CodeTypeDeclaration CreateControllerClientClass(CodeNamespace ns, string className)
		{
			var targetClass = new CodeTypeDeclaration(className)
			{
				IsClass = true,
				IsPartial = true,
				TypeAttributes = TypeAttributes.Public,
				CustomAttributes = CreateClassCustomAttributes(),
			};

			ns.Types.Add(targetClass);
			AddConstructor(targetClass);

			//Console.WriteLine("controller className: " + className);
			return targetClass;
		}


		abstract protected void AddBasicReferences();

		abstract protected void AddConstructor(CodeTypeDeclaration targetClass);

		protected virtual CodeAttributeDeclarationCollection CreateClassCustomAttributes()
		{
			return null;
		}

		protected virtual void AddHelperFunctionsInClass(CodeTypeDeclaration c)
		{
			//do nothing.
		}
	}


}
