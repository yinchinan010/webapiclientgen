﻿using System;
using System.CodeDom;
using System.Linq;
using System.Diagnostics;
using Fonlow.Reflection;
using Fonlow.Web.Meta;
using System.Collections.Generic;
using Fonlow.Poco2Ts;
using System.Reflection;
using System.Xml.Linq;
using Fonlow.Poco2Client;

namespace Fonlow.CodeDom.Web.Cs
{
	/// <summary>
	/// Generate a client function upon ApiDescription for C#
	/// </summary>
	internal class ClientApiFunctionGen
	{
		readonly WebApiDescription description;
		readonly string methodName;
		protected Type returnType;
		readonly bool returnTypeIsStream;
		readonly bool returnTypeIsDynamicObject;

		/// <summary>
		/// Decorated by NotNullAttribute
		/// </summary>
		readonly bool returnTypeDecoratedWithNotNullable = false;
		readonly bool returnTypeDecoratedWithMaybeNullable = false;
		CodeMemberMethod clientMethod;
		readonly Poco2Client.Poco2CsGen poco2CsGen;
		readonly bool forAsync;
		readonly bool stringAsString;
		readonly string statementOfEnsureSuccessStatusCode;
		readonly CodeGenOutputs settings;
		readonly System.Reflection.ParameterInfo[] parameterInfoArray;
		readonly IDictionary<Type, Func<object, string>> attribueCommentDic;

		ClientApiFunctionGen(WebApiDescription webApiDescription, Poco2Client.Poco2CsGen poco2CsGen, CodeGenOutputs settings, bool forAsync)
		{
			this.description = webApiDescription;
			//this.sharedContext = sharedContext;
			this.poco2CsGen = poco2CsGen;
			this.settings = settings;
			this.forAsync = forAsync;
			this.stringAsString = settings.StringAsString;
			//this.diFriendly = settings.DIFriendly;
			statementOfEnsureSuccessStatusCode = settings.UseEnsureSuccessStatusCodeEx ? "EnsureSuccessStatusCodeEx" : "EnsureSuccessStatusCode";
			methodName = webApiDescription.ActionDescriptor.ActionName;
			if (methodName.EndsWith("Async"))
				methodName = methodName.Substring(0, methodName.Length - 5);

			returnType = webApiDescription.ResponseDescription?.ResponseType ?? webApiDescription.ActionDescriptor.ReturnType;
			returnTypeIsStream = returnType != null && ((returnType.FullName == typeNameOfHttpResponseMessage)
				|| (returnType.FullName == typeOfIHttpActionResult)
				|| (returnType.FullName == typeOfIActionResult)
				|| (returnType.FullName == typeOfActionResult)
				|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IActionResult")) // .net core is not translating Task<IActionResult> properly.
				|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IHttpActionResult"))
				|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.ActionResult"))
				);

			returnTypeIsDynamicObject = returnType != null && returnType.FullName != null && returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[System.Object");

			var methodInfo = webApiDescription.ActionDescriptor.ControllerDescriptor.ControllerType.GetMethod(webApiDescription.ActionDescriptor.MethodName, webApiDescription.ActionDescriptor.MethodTypes);
			if (methodInfo != null)
			{
				parameterInfoArray = methodInfo.GetParameters();
				if (settings.MaybeNullAttributeOnMethod)
				{
					returnTypeDecoratedWithMaybeNullable = returnType != null && Attribute.IsDefined(methodInfo.ReturnParameter, typeof(System.Diagnostics.CodeAnalysis.MaybeNullAttribute));
				}
				else if (settings.NotNullAttributeOnMethod)
				{
					returnTypeDecoratedWithNotNullable = returnType != null && Attribute.IsDefined(methodInfo.ReturnParameter, typeof(System.Diagnostics.CodeAnalysis.NotNullAttribute));
				}
			}

			AnnotationCommentGenerator annotationCommentGenerator = new AnnotationCommentGenerator();
			attribueCommentDic = annotationCommentGenerator.Get();
		}

		const string typeOfIHttpActionResult = "System.Web.Http.IHttpActionResult";
		const string typeOfIActionResult = "Microsoft.AspNetCore.Mvc.IActionResult"; //for .net core 2.1. I did not need this for .net core 2.0
		const string typeOfActionResult = "Microsoft.AspNetCore.Mvc.ActionResult"; //for .net core 2.1. I did not need this for .net core 2.0

		static readonly Type typeOfChar = typeof(char);

		public static CodeMemberMethod Create(WebApiDescription webApiDescription, Poco2Client.Poco2CsGen poco2CsGen, CodeGenOutputs settings, bool forAsync)
		{
			var gen = new ClientApiFunctionGen(webApiDescription, poco2CsGen, settings, forAsync);
			return gen.CreateApiFunction();
		}

		CodeMemberMethod CreateApiFunction()
		{
			//create method
			clientMethod = forAsync ? CreateMethodBasicForAsync() : CreateMethodBasic();
#if DEBUG
			if (methodName == "GetByteWithRange")
			{
				Console.WriteLine("GetByteWithRange");
			}
#endif
			CreateDocComments();
			if (settings.MaybeNullAttributeOnMethod && returnTypeDecoratedWithMaybeNullable)
			{
				clientMethod.ReturnTypeCustomAttributes.Add(new CodeAttributeDeclaration("System.Diagnostics.CodeAnalysis.MaybeNullAttribute"));
			}
			else if (settings.NotNullAttributeOnMethod && returnTypeDecoratedWithNotNullable)
			{
				clientMethod.ReturnTypeCustomAttributes.Add(new CodeAttributeDeclaration("System.Diagnostics.CodeAnalysis.NotNullAttribute"));
			}

			System.Globalization.TextInfo textInfo = new System.Globalization.CultureInfo("en-US", false).TextInfo;
			switch (description.HttpMethod)
			{
				case "GET":
				case "DELETE":
					RenderGetOrDeleteImplementation(textInfo.ToTitleCase(description.HttpMethod.ToLower()));
					break;
				case "POST":
				case "PUT":
				case "PATCH":
					RenderPostOrPutImplementation(textInfo.ToTitleCase(description.HttpMethod.ToLower()));
					break;
				default:
					Trace.TraceWarning("This HTTP method {0} is not yet supported", description.HttpMethod);
					break;
			}

			return clientMethod;
		}

		CodeMemberMethod CreateMethodBasic()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = methodName,
				ReturnType = poco2CsGen.TranslateToClientTypeReferenceForNullableReference(returnType),
			};
		}

		CodeMemberMethod CreateMethodBasicForAsync()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = methodName + "Async",
				ReturnType = returnType == null ? new CodeTypeReference("async Task")
				: new CodeTypeReference("async Task", poco2CsGen.TranslateToClientTypeReferenceForNullableReference(returnType)),
			};
		}

		void CreateDocComments()
		{
			void CreateDocComment(string elementName, string doc)
			{
				if (string.IsNullOrWhiteSpace(doc))
					return;

				clientMethod.Comments.Add(new CodeCommentStatement("<" + elementName + ">" + doc + "</" + elementName + ">", true));
			}

			void CreateParamDocComment(string paramName, string doc)
			{
				List<string> ss = new();
				if (!String.IsNullOrWhiteSpace(doc))
				{
					ss.Add(doc);
				}

				if (settings.DataAnnotationsToComments)
				{
					var parameterInfo = parameterInfoArray.SingleOrDefault(p => p?.Name == paramName);
					var customAttributes = parameterInfo.GetCustomAttributes();
					foreach (Attribute a in customAttributes)
					{
						if (attribueCommentDic.TryGetValue(a.GetType(), out Func<object, string> textGenerator))
						{
							ss.Add(textGenerator(a));
						}
					}
				}

				if (ss.Count == 0)
				{
					return;
				}

				if (ss.Count == 1)
				{
					clientMethod.Comments.Add(new CodeCommentStatement("<param name=\"" + paramName + "\">" + ss[0] + "</param>", true));
				}
				else
				{
					clientMethod.Comments.Add(new CodeCommentStatement("<param name=\"" + paramName + "\">" + ss[0], true));
					for (int i = 1; i < ss.Count; i++)
					{
						clientMethod.Comments.Add(new CodeCommentStatement(ss[i], true));
					}

					clientMethod.Comments.Add(new CodeCommentStatement("</param>", true));
				}
			}

			clientMethod.Comments.Add(new CodeCommentStatement("<summary>", true));
			var methodFullName = description.ActionDescriptor.MethodFullName;
			if (description.ParameterDescriptions.Length > 0)
			{
				methodFullName += "(" + description.ParameterDescriptions.Select(d =>
				{
					string typeText;
					if (TypeHelper.IsDotNetSimpleType(d.ParameterDescriptor.ParameterType))
					{
						typeText = d.ParameterDescriptor.ParameterType.FullName;
					}
					else if (d.ParameterDescriptor.ParameterType.IsGenericType)
					{
						typeText = poco2CsGen.TranslateToClientTypeReferenceTextForDocComment(d.ParameterDescriptor.ParameterType);
					}
					else if (d.ParameterDescriptor.ParameterType.IsArray)
					{
						typeText = poco2CsGen.TranslateToClientTypeReferenceTextForDocComment(d.ParameterDescriptor.ParameterType);
					}
					else
					{
						typeText = d.ParameterDescriptor.ParameterType.FullName;
					};

					return typeText;
				}).Aggregate((c, n) => c + "," + n) + ")";

				Console.WriteLine("FullName: " + methodFullName);
			}

			Fonlow.DocComment.docMember methodComments = null;
			if (WebApiDocSingleton.Instance.Lookup != null)
			{
				methodComments = WebApiDocSingleton.Instance.Lookup.GetMember("M:" + methodFullName);
				var noIndent = Fonlow.DocComment.StringFunctions.TrimIndentedMultiLineTextToArray(Fonlow.DocComment.DocCommentHelper.GetSummary(methodComments));
				if (noIndent != null)
				{
					foreach (var item in noIndent)
					{
						clientMethod.Comments.Add(new CodeCommentStatement(item, true));
					}
				}
			}

			clientMethod.Comments.Add(new CodeCommentStatement(description.HttpMethod + " " + description.RelativePath, true));
			clientMethod.Comments.Add(new CodeCommentStatement("</summary>", true));
			foreach (var pd in description.ParameterDescriptions)
			{
				var parameterComment = Fonlow.DocComment.DocCommentHelper.GetParameterComment(methodComments, pd.Name);
				CreateParamDocComment(pd.Name, parameterComment);
			}

			var returnComment = Fonlow.DocComment.DocCommentHelper.GetReturnComment(methodComments);
			if (returnComment != null)
			{
				CreateDocComment("returns", returnComment);
			}
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="httpMethod">GET, DELETE, POST, PUT</param>
		void RenderGetOrDeleteImplementation(string httpMethod)
		{
			CodeParameterDeclarationExpression[] parameters = description.ParameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri
			|| p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery || p.ParameterDescriptor.ParameterBinder == ParameterBinder.None)
				.Select(d =>
				{
					var exp = new CodeParameterDeclarationExpression(poco2CsGen.TranslateToClientTypeReference(d.ParameterDescriptor.ParameterType), d.Name);
					exp.UserData.Add(Fonlow.TypeScriptCodeDom.UserDataKeys.ParameterDescriptor, d.ParameterDescriptor);
					return exp;
				}).ToArray();

			clientMethod.Parameters.AddRange(parameters);

			if (settings.CancellationTokenEnabled)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression("System.Threading.CancellationToken", "cancellationToken"));
			}

			if (settings.HandleHttpRequestHeaders)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression("Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			var jsUriQuery = UriQueryHelper.CreateUriQuery(description.RelativePath, description.ParameterDescriptions);
			string uriText = jsUriQuery == null ? $"\"{description.RelativePath}\"" : RemoveTrialEmptyString($"\"{jsUriQuery}\"");


			clientMethod.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "requestUri",
				new CodeSnippetExpression(uriText)));

			clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + $"using var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri);"));

			if (settings.HandleHttpRequestHeaders)
			{
				clientMethod.Statements.Add(new CodeSnippetStatement("\t\t\thandleHeaders?.Invoke(httpRequestMessage.Headers);"));
			}

			AddResponseMessageSendAsync(clientMethod);

			CodeVariableReferenceExpression resultReference = new CodeVariableReferenceExpression("responseMessage");

			//Statement: result.EnsureSuccessStatusCode();
			if (returnTypeIsStream)
			{
				clientMethod.Statements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

				if (returnType != null)
				{
					AddReturnStatement(clientMethod.Statements);
				}
			}
			else
			{
				CodeTryCatchFinallyStatement try1 = new CodeTryCatchFinallyStatement();
				try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));
				clientMethod.Statements.Add(try1);

				//Statement: return something;
				if (returnType != null)
				{
					AddReturnStatement(try1.TryStatements);
				}

				try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));
			}
		}

		void RenderPostOrPutImplementation(string httpMethod)
		{
			//Create function parameters in prototype
			var parameters = description.ParameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri
			|| p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromBody
			|| p.ParameterDescriptor.ParameterBinder == ParameterBinder.None).Select(d =>
			{
				var exp = new CodeParameterDeclarationExpression(poco2CsGen.TranslateToClientTypeReference(d.ParameterDescriptor.ParameterType), d.Name);
				exp.UserData.Add(Fonlow.TypeScriptCodeDom.UserDataKeys.ParameterDescriptor, d.ParameterDescriptor);
				return exp;
			}
			).ToArray();
			clientMethod.Parameters.AddRange(parameters);

			if (settings.CancellationTokenEnabled)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression("System.Threading.CancellationToken", "cancellationToken"));
			}

			if (settings.HandleHttpRequestHeaders)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression("Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			var fromBodyParameterDescriptions = description.ParameterDescriptions.Where(d => d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromBody
				|| (TypeHelper.IsComplexType(d.ParameterDescriptor.ParameterType) && (!(d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri) || (d.ParameterDescriptor.ParameterBinder == ParameterBinder.None)))).ToArray();
			if (fromBodyParameterDescriptions.Length > 1)
			{
				throw new CodeGenException("Bad Api Definition")
				{
					Description = String.Format("This API function {0} has more than 1 FromBody bindings in parameters", description.ActionDescriptor.ActionName)
				};
			}

			var singleFromBodyParameterDescription = fromBodyParameterDescriptions.FirstOrDefault();

			void AddRequestUriWithQueryAssignmentStatement()
			{

				var jsUriQuery = UriQueryHelper.CreateUriQuery(description.RelativePath, description.ParameterDescriptions);
				string uriText = jsUriQuery == null ? $"\"{description.RelativePath}\"" : RemoveTrialEmptyString($"\"{jsUriQuery}\"");

				clientMethod.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "requestUri",
					new CodeSnippetExpression(uriText)));
			}

			AddRequestUriWithQueryAssignmentStatement();

			clientMethod.Statements.Add(new CodeSnippetStatement(
				ThreeTabs + $"using var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri);"));

			if (singleFromBodyParameterDescription != null)
			{
				if (settings.UseSystemTextJson)
				{
					clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + $"var contentJson = JsonSerializer.Serialize({singleFromBodyParameterDescription.ParameterDescriptor.ParameterName}, jsonSerializerSettings);"));
					clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + @"var content = new StringContent(contentJson, System.Text.Encoding.UTF8, ""application/json"");"));
				}
				else
				{
					clientMethod.Statements.Add(new CodeSnippetStatement(
	"\t\t\tusing var requestWriter = new System.IO.StringWriter();\r\n\t\t\tvar requestSerializer = JsonSerializer.Create(jsonSerializerSettings);"
	));
					clientMethod.Statements.Add(new CodeMethodInvokeExpression(new CodeSnippetExpression("requestSerializer"), "Serialize",
						new CodeSnippetExpression("requestWriter"),
						new CodeSnippetExpression(singleFromBodyParameterDescription.ParameterDescriptor.ParameterName)));


					clientMethod.Statements.Add(new CodeSnippetStatement(
	@"			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, ""application/json"");"
						));
				}

				clientMethod.Statements.Add(new CodeSnippetStatement("\t\t\thttpRequestMessage.Content = content;"));
				if (settings.HandleHttpRequestHeaders)
				{
					clientMethod.Statements.Add(new CodeSnippetStatement("\t\t\thandleHeaders?.Invoke(httpRequestMessage.Headers);"));
				}
			}

			AddResponseMessageSendAsync(clientMethod);

			var resultReference = new CodeVariableReferenceExpression("responseMessage");

			if (returnTypeIsStream)
			{
				clientMethod.Statements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

				//Statement: return something;
				if (returnType != null)
				{
					AddReturnStatement(clientMethod.Statements);
				}
			}
			else
			{
				CodeTryCatchFinallyStatement try1 = new CodeTryCatchFinallyStatement();
				clientMethod.Statements.Add(try1);
				try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

				//Statement: return something;
				if (returnType != null)
				{
					AddReturnStatement(try1.TryStatements);
				}

				try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));
			}

			if (singleFromBodyParameterDescription != null && !settings.UseSystemTextJson)
			{
				//Add3TEndBacket(clientMethod);
			}

			//Add3TEndBacket(clientMethod);
		}

		static void Add3TEndBacket(CodeMemberMethod method)
		{
			method.Statements.Add(new CodeSnippetStatement("\t\t\t}"));
		}

		string ThreeTabs => "\t\t\t";

		void AddResponseMessageSendAsync(CodeMemberMethod method)
		{
			var cancellationToken = settings.CancellationTokenEnabled ? ", cancellationToken" : String.Empty;
			method.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression($"await client.SendAsync(httpRequestMessage{cancellationToken})") : new CodeSnippetExpression($"client.SendAsync(httpRequestMessage{cancellationToken}).Result")));
		}

		static void Add4TEndBacket(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\t}"));
		}

		static void Add4TStartBacket(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\t{"));
		}

		static void AddNewtonSoftJsonTextReader(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream));"));
		}

		void AddNewtonSoftJsonSerializerDeserialize(CodeStatementCollection statementCollection)
		{
			//statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression( this had been working well, however, there's not built-in way of supporting nullable in codedom.
			//	new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", poco2CsGen.TranslateToClientTypeReference(returnType)),
			//		new CodeSnippetExpression("jsonReader"))));

			statementCollection.Add(new CodeSnippetStatement($"\t\t\t\treturn serializer.Deserialize<{poco2CsGen.TranslateTypeToCSharp(returnType)}>(jsonReader);"));

		}

		static void AddNewtonSoftJsonSerializer(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "serializer", new CodeSnippetExpression("JsonSerializer.Create(jsonSerializerSettings)")));
		}

		void DeserializeContentString(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
				new CodeMethodReferenceExpression(
				new CodeVariableReferenceExpression("JsonSerializer"), "Deserialize", poco2CsGen.TranslateToClientTypeReference(returnType)),
				new CodeSnippetExpression("contentString"), new CodeSnippetExpression("jsonSerializerSettings"))));
		}

		void AddResponseMessageRead(CodeStatementCollection statementCollection)
		{
			if (TypeHelper.IsStringType(returnType)) //ASP.NET Core return null as empty body with status code 204, whether to produce JSON or plain text.
			{
				statementCollection.Add(new CodeSnippetStatement("\t\t\t\tif (responseMessage.StatusCode == System.Net.HttpStatusCode.NoContent) { return null; }"));
			}

			if (settings.UseSystemTextJson)
			{
				if (returnType != null && TypeHelper.IsStringType(returnType) && this.stringAsString)
				{
					statementCollection.Add(new CodeSnippetStatement(forAsync
					? "\t\t\t\tvar stream = await responseMessage.Content.ReadAsStreamAsync();"
					: "\t\t\t\tvar stream = responseMessage.Content.ReadAsStreamAsync().Result;"));
				}
				else
				{
					statementCollection.Add(new CodeSnippetStatement(forAsync
					? "\t\t\t\tvar contentString = await responseMessage.Content.ReadAsStringAsync();"
					: "\t\t\t\tvar contentString = responseMessage.Content.ReadAsStringAsync().Result;"));
				}
			}
			else
			{
				statementCollection.Add(new CodeSnippetStatement(forAsync
					? "\t\t\t\tvar stream = await responseMessage.Content.ReadAsStreamAsync();"
					: "\t\t\t\tvar stream = responseMessage.Content.ReadAsStreamAsync().Result;"));
			}
		}

		const string typeNameOfHttpResponseMessage = "System.Net.Http.HttpResponseMessage";

		void AddReturnStatement(CodeStatementCollection statementCollection)
		{
			if (returnTypeIsStream)
			{
				statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("responseMessage")));
				return;
			}
			else if (returnTypeIsDynamicObject) // .NET Core ApiExplorer could get return type out of Task<> in most cases, however, not for dynamic and anynomous, while .NET Framework ApiExplorer is fine.
			{
				AddResponseMessageRead(statementCollection);
				if (settings.UseSystemTextJson)
				{
					DeserializeContentString(statementCollection); //todo: may not be good
				}
				else
				{
					AddNewtonSoftJsonTextReader(statementCollection);
					//Add4TStartBacket(statementCollection);

					AddNewtonSoftJsonSerializer(statementCollection);

					//var invokeExpression = new CodeMethodInvokeExpression(
					//	new CodeMethodReferenceExpression(
					//		new CodeVariableReferenceExpression("serializer"),
					//		"Deserialize",
					//		poco2CsGen.TranslateToClientTypeReference(returnType)
					//	),

					//	new CodeSnippetExpression("jsonReader")
					//);
					//statementCollection.Add(new CodeMethodReturnStatement(invokeExpression));

					statementCollection.Add(new CodeSnippetStatement($"\t\t\t\treturn serializer.Deserialize<{poco2CsGen.TranslateTypeToCSharp(returnType)}>(jsonReader);"));

					//Add4TEndBacket(statementCollection);
				}

				return;
			}
			else if (returnType.IsGenericType)
			{
				Type genericTypeDefinition = returnType.GetGenericTypeDefinition();
				if (genericTypeDefinition == typeof(System.Threading.Tasks.Task<>))
				{
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("responseMessage")));
					Trace.TraceWarning("There could be something to improve: " + returnType.GenericTypeArguments[0].ToString());
					return;
				}
			}

			AddResponseMessageRead(statementCollection);

			if (returnType != null && TypeHelper.IsStringType(returnType))
			{
				if (this.stringAsString)
				{
					statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing System.IO.StreamReader streamReader = new System.IO.StreamReader(stream);"));
					//Add4TStartBacket(statementCollection); for C# 6, no backets needed
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("streamReader.ReadToEnd();")));
					//Add4TEndBacket(statementCollection);
				}
				else
				{
					if (settings.UseSystemTextJson)
					{
						statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
							new CodeMethodReferenceExpression(
								new CodeVariableReferenceExpression("JsonSerializer"), "Deserialize", new CodeTypeReference(typeof(System.String))),
							new CodeSnippetExpression("contentString"),
							new CodeSnippetExpression("jsonSerializerSettings"))));
					}
					else
					{
						AddNewtonSoftJsonTextReader(statementCollection);
						//Add4TStartBacket(statementCollection);
						statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("jsonReader.ReadAsString()")));
						//Add4TEndBacket(statementCollection);
					}
				}
			}
			else if (returnType == typeOfChar)
			{
				if (settings.UseSystemTextJson)
				{
					DeserializeContentString(statementCollection);
				}
				else
				{
					AddNewtonSoftJsonTextReader(statementCollection);
					//Add4TStartBacket(statementCollection);
					AddNewtonSoftJsonSerializer(statementCollection);
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("serializer.Deserialize<char>(jsonReader)")));
					//Add4TEndBacket(statementCollection);
				}
			}
			else if (returnType.IsPrimitive)
			{
				if (settings.UseSystemTextJson)
				{
					DeserializeContentString(statementCollection);
				}
				else
				{
					AddNewtonSoftJsonTextReader(statementCollection);
					//Add4TStartBacket(statementCollection);
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression(String.Format("{0}.Parse(jsonReader.ReadAsString())", returnType.FullName))));
					//Add4TEndBacket(statementCollection);
				}
			}
			else if (returnType.IsGenericType || TypeHelper.IsComplexType(returnType) || returnType.IsEnum)
			{
				if (settings.UseSystemTextJson)
				{
					DeserializeContentString(statementCollection);
				}
				else
				{
					AddNewtonSoftJsonTextReader(statementCollection);
					//Add4TStartBacket(statementCollection);
					AddNewtonSoftJsonSerializer(statementCollection);
					AddNewtonSoftJsonSerializerDeserialize(statementCollection);
					//Add4TEndBacket(statementCollection);
				}
			}
			else
			{
				Trace.TraceWarning("This type is not yet supported: {0}", returnType.FullName);
			}
		}

		private static string RemoveTrialEmptyString(string s)
		{
			var p = s.IndexOf("+\"\"");
			if (p >= 0)
			{
				return s.Remove(p, 3);
			}

			var p2 = s.IndexOf("))\"");
			if (p2 >= 0)
			{
				return s.Remove(p2 + 2, 1);
			}

			return s;
		}

	}

}
