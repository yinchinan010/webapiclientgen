﻿using System.CodeDom;
using Fonlow.Poco2Client;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate TypeScript codes of the client API of the controllers
	/// </summary>
	public class ControllersTsClientApiGen : ControllersTsClientApiGenBase
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsOutput"></param>
		/// <remarks>The client data types should better be generated through SvcUtil.exe with the DC option. The client namespace will then be the original namespace plus suffix ".client". </remarks>
		public ControllersTsClientApiGen(JSOutput jsOutput, bool handleHttpRequestHeaders, Fonlow.Poco2Client.IDocCommentTranslate docCommentTranslate) : base(jsOutput, new ClientApiTsFunctionGen(jsOutput.ContentType, handleHttpRequestHeaders), docCommentTranslate)
		{
		}

		protected override IPoco2Client CreatePoco2TsGen(string clientNamespaceSuffix)
		{
			return new Fonlow.Poco2Ts.Poco2TsGen(TargetUnit, clientNamespaceSuffix, jsOutput.HelpStrictMode, new TypeScriptCodeDom.CodeObjectHelper(false));
		}

		protected override void AddBasicReferences()
		{
			TargetUnit.ReferencedAssemblies.Add("///<reference path=\"../typings/jquery/jquery.d.ts\" />");
			TargetUnit.ReferencedAssemblies.Add("///<reference path=\"HttpClient.ts\" />");
		}

		protected override void AddConstructor(CodeTypeDeclaration targetClass)
		{
			CodeConstructor constructor = new()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};

			// Add parameters.
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"string = HttpClient.locationOrigin", "private baseUri"));
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"HttpClientBase = new HttpClient()", "private httpClient"));
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"(xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any", "private error?"));
			constructor.Parameters.Add(new CodeParameterDeclarationExpression("{ [key: string]: any; }", "private statusCode?"));

			targetClass.Members.Add(constructor);
		}

	}


}
