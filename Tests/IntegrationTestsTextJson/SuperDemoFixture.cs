﻿using Fonlow.Testing;
using System;

namespace IntegrationTests
{
	public class SuperDemoFixture : DefaultHttpClient
	{
		public SuperDemoFixture()
		{
			var jsonSerializerSettings = new System.Text.Json.JsonSerializerOptions()
			{
				DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingDefault,
				PropertyNameCaseInsensitive = true,
			};

			Api = new DemoWebApi.Controllers.Client.SuperDemo(HttpClient, jsonSerializerSettings);
		}

		public DemoWebApi.Controllers.Client.SuperDemo Api { get; private set; }
	}
}
