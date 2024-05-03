﻿using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Fonlow.IntegralExtensions
{
	public class UInt64JsonConverter : JsonConverter<UInt64>
	{
		public override UInt64 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			if (reader.TokenType == JsonTokenType.Number)
			{
				using JsonDocument doc = JsonDocument.ParseValue(ref reader);
				string rawText = doc.RootElement.GetRawText();
				return UInt64.Parse(rawText, NumberFormatInfo.InvariantInfo);
			}
			else if (reader.TokenType == JsonTokenType.String)
			{
				using JsonDocument doc = JsonDocument.ParseValue(ref reader);
				string text = doc.RootElement.GetString();
				return UInt64.Parse(text, NumberFormatInfo.InvariantInfo);
			}

			throw new JsonException(string.Format("Found token {0} but expected token {1}", reader.TokenType, JsonTokenType.Number));
		}

		public override void Write(Utf8JsonWriter writer, UInt64 value, JsonSerializerOptions options) =>
			writer.WriteStringValue(value.ToString(NumberFormatInfo.InvariantInfo));
	}
}
