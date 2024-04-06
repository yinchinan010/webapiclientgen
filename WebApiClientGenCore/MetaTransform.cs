﻿using Fonlow.DocComment;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Fonlow.Reflection;

namespace Fonlow.Web.Meta
{
	/// <summary>
	/// Transform the runtime info of Web API into POCO meta data.
	/// </summary>
	/// <exception cref="ArgumentException">Thrown if the BindingSource is not among Path, Query, Body and ModelBinding.</exception>
	public static class MetaTransform
	{
		static ParameterBinder GetParameterBinder(BindingSource bindingSource)
		{
			if (bindingSource == null)
				return ParameterBinder.None;

			if (BindingSource.FormFile.CanAcceptDataFrom(bindingSource))
				return ParameterBinder.FromForm;

			if (BindingSource.Form.CanAcceptDataFrom(bindingSource))
				return ParameterBinder.FromForm;

			if (BindingSource.Path.CanAcceptDataFrom(bindingSource))
				return ParameterBinder.FromUri;

			if (BindingSource.Query.CanAcceptDataFrom(bindingSource))
				return ParameterBinder.FromUri;

			if (BindingSource.Body.CanAcceptDataFrom(bindingSource))
				return ParameterBinder.FromBody;

			if (BindingSource.ModelBinding.CanAcceptDataFrom(bindingSource))
				return ParameterBinder.FromUri;

			if (BindingSource.Header.CanAcceptDataFrom(bindingSource))
				return ParameterBinder.FromHeader;

			throw new ArgumentException($"How can it be with this ParameterBindingAttribute: {bindingSource.DisplayName}", nameof(bindingSource));
		}

		/// <summary>
		/// Translate ASP.NET ApiDescription to codegen's WebApiDescription
		/// </summary>
		/// <param name="description"></param>
		/// <returns></returns>
		public static WebApiDescription GetWebApiDescription(ApiDescription description)
		{
			var controllerActionDescriptor = description.ActionDescriptor as Microsoft.AspNetCore.Mvc.Controllers.ControllerActionDescriptor;
			if (controllerActionDescriptor == null)
			{
				return null;
			}

			try
			{
				Type responseType;
				if (description.SupportedResponseTypes.Count > 0)
				{
					if (description.SupportedResponseTypes[0].Type.Equals(typeof(void)))
					{
						responseType = null;
					}
					else
					{
						responseType = description.SupportedResponseTypes[0].Type; // support only the first one.
					}
				}
				else
				{
					Microsoft.AspNetCore.Mvc.Controllers.ControllerActionDescriptor actionDescriptor = description.ActionDescriptor as Microsoft.AspNetCore.Mvc.Controllers.ControllerActionDescriptor;
					Debug.Assert(actionDescriptor != null, "is it possible?");
					responseType = actionDescriptor.MethodInfo.ReturnType;// in .net core 2.1, IActionResult is not in SupportedResponseTypes anymore, so I have to get it here.
					if (responseType.Equals(typeof(void)))
					{
						responseType = null;
					}
				}

				var dr = new WebApiDescription(description.ActionDescriptor.Id)
				{
					ActionDescriptor = new ActionDescriptor()
					{
						ActionName = controllerActionDescriptor.ActionName,
						MethodName = controllerActionDescriptor.MethodInfo.Name,
						MethodFullName = controllerActionDescriptor.MethodInfo.DeclaringType.FullName + "." + controllerActionDescriptor.MethodInfo.Name,
						MethodParameterTypes = controllerActionDescriptor.MethodInfo.GetParameters().Select(d => d.ParameterType).ToArray(),
						ReturnType = responseType,
						CustomAttributes = controllerActionDescriptor.MethodInfo.GetCustomAttributes(false).OfType<Attribute>().ToArray(),
						ControllerDescriptor = new ControllerDescriptor()
						{
							ControllerName = controllerActionDescriptor.ControllerName,
							ControllerType = controllerActionDescriptor.ControllerTypeInfo.AsType()
						}
					},

					HttpMethod = description.HttpMethod,
					RelativePath = description.RelativePath + BuildQuery(description.ParameterDescriptions),
					ResponseDescription = new ResponseDescription()
					{
						ResponseType = responseType,
					},

					ParameterDescriptions = description.ParameterDescriptions.Select(d =>
					{
						var parameterBinder = GetParameterBinder(d.Source);
						var descriptor = d.ParameterDescriptor;
						if (descriptor == null)
						{
							throw new CodeGenException($"Web API {controllerActionDescriptor.ControllerName}/{controllerActionDescriptor.ActionName} may have invalid parameters.");
						}
						
						var parameterType = descriptor.ParameterType;
						var isValueType = TypeHelper.IsValueType(parameterType);
						var isNullablePrimitive = TypeHelper.IsNullablePrimitive(parameterType);
						var isArrayType = TypeHelper.IsSimpleListType(parameterType) || TypeHelper.IsSimpleArrayType(parameterType);
						if ((parameterBinder == ParameterBinder.FromQuery || parameterBinder == ParameterBinder.FromUri) &&
							(!isValueType && !isNullablePrimitive && !isArrayType && !parameterType.IsEnum))
						{
							throw new ArgumentException($"Not support ParameterBinder {parameterBinder} with a class parameter {parameterType}.");
						}

						return new ParameterDescription()
						{
							Name = d.Name,
							ParameterDescriptor = new ParameterDescriptor()
							{
								ParameterName = d.ParameterDescriptor.Name,
								ParameterType = parameterType,
								ParameterBinder = parameterBinder,

							}
						};
					}).ToArray(),

				};

				return dr;
			}
			catch (ArgumentException ex)//Expected to be thrown from GetParameterBinder()
			{
				var msg = ex.Message;
				var errorMsg = $"Web API {controllerActionDescriptor.ControllerName}/{controllerActionDescriptor.ActionName} is defined with invalid parameters: {msg}";
				Trace.TraceError(errorMsg);
				throw new CodeGenException(errorMsg, ex);
			}
			catch (NullReferenceException ex)
			{
				var msg = ex.Message;
				var errorMsg = $"Web API {controllerActionDescriptor.ControllerName}/{controllerActionDescriptor.ActionName} has problem: {msg}";
				Trace.TraceError(errorMsg);
				throw new CodeGenException(errorMsg, ex);
			}
			catch (Exception ex)
			{
				Trace.TraceError(ex.ToString());
				throw;
			}
		}

		static string BuildQuery(IList<ApiParameterDescription> ds)
		{
			var qs = ds.Where(d => BindingSource.Query.CanAcceptDataFrom(d.Source)).Select(k => String.Format("{0}={{{0}}}", k.Name)).ToArray();
			if (qs.Length == 0)
			{
				return String.Empty;
			}

			return "?" + qs.Aggregate((c, n) => c + "&" + n); ;
		}
	}

}
