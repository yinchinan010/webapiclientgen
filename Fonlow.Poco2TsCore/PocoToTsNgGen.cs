﻿using System;
using System.CodeDom;

namespace Fonlow.Poco2Ts
{
	/// <summary>
	/// Used by plugins sharing similar handlings with ActionResult.
	/// </summary>
	public class PocoToTsNgGen : Poco2TsGen
	{
		public PocoToTsNgGen(CodeCompileUnit codeCompileUnit, string clientNamespaceSuffix, bool helpStrictMode) : base(codeCompileUnit, clientNamespaceSuffix, helpStrictMode, new TypeScriptCodeDom.CodeObjectHelper(true))
		{

		}
		protected override CodeTypeReference TranslateActionResultToClientTypeReference(Type type)
		{
			if (type.FullName.Contains("System.Web.Http.IHttpActionResult") || type.FullName.Contains("Microsoft.AspNetCore.Mvc.IActionResult"))
			{
				return new CodeTypeReference("response");
			}

			if (type.FullName.Contains("System.Net.Http.HttpResponseMessage") || type.FullName.Contains("Microsoft.AspNetCore.Mvc.ActionResult"))
			{
				return new CodeTypeReference("blobresponse");
			}

			return null;
		}
	}
}
