﻿using Fonlow.Testing;

namespace IntegrationTests
{
	/*
	And make sure the testApi credential exists through
	POST to http://localhost:10965/api/Account/Register
	Content-Type: application/json

	{
	Email: 'testapi@test.com',
	Password: 'Tttttttt_8',
	ConfirmPassword:  'Tttttttt_8'
	}

	*/
	public class EntitiesFixture : DefaultHttpClient
	{
		public EntitiesFixture()
		{
			System.Text.Json.JsonSerializerOptions jsonSerializerSettings = new System.Text.Json.JsonSerializerOptions()
			{
				DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingDefault,
				PropertyNameCaseInsensitive = true,
				NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.AllowReadingFromString, // newtonsoft.json along with converters may return long and int128 as string
			};

			//jsonSerializerSettings.Converters.Add(new DateOnlyJsonConverter()); //not needed in ASP.NET 7
			//jsonSerializerSettings.Converters.Add(new DateOnlyNullableJsonConverter());
			Api = new DemoWebApi.Controllers.Client.Entities(HttpClient, jsonSerializerSettings);
		}

		public DemoWebApi.Controllers.Client.Entities Api { get; private set; }
	}

}
