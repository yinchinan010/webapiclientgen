//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DemoWebApi.Controllers.Client
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using System.Net.Http;
    using Newtonsoft.Json;
    using System.Net;
    
    
    public partial class Entities
    {
        
        private System.Net.Http.HttpClient client;
        
        private System.Uri baseUri;
        
        public Entities(System.Net.Http.HttpClient client, System.Uri baseUri)
        {
            this.client = client;
            this.baseUri = baseUri;
        }
        
        /// <summary>
        /// 
        /// GET api/Entities/{id}
        /// </summary>
        public async Task<DemoWebApi.DemoData.Client.Entity> GetAsync(long id)
        {
            var template = new System.UriTemplate("api/Entities/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = await client.GetAsync(requestUri.ToString());
            responseMessage.EnsureSuccessStatusCode();
            var text = await responseMessage.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<DemoWebApi.DemoData.Client.Entity>(text);
        }
        
        /// <summary>
        /// 
        /// GET api/Entities/{id}
        /// </summary>
        public DemoWebApi.DemoData.Client.Entity Get(long id)
        {
            var template = new System.UriTemplate("api/Entities/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = this.client.GetAsync(requestUri.ToString()).Result;
            responseMessage.EnsureSuccessStatusCode();
            var text = responseMessage.Content.ReadAsStringAsync().Result;
            return JsonConvert.DeserializeObject<DemoWebApi.DemoData.Client.Entity>(text);
        }
        
        /// <summary>
        /// 
        /// POST api/Entities
        /// </summary>
        public async Task<System.Int64> CreatePersonAsync(DemoWebApi.DemoData.Client.Person person)
        {
            var requestUri = new System.Uri(this.baseUri, "api/Entities");
            var responseMessage = await client.PostAsJsonAsync(requestUri.ToString(), person);
            responseMessage.EnsureSuccessStatusCode();
            var text = await responseMessage.Content.ReadAsStringAsync();
            return System.Int64.Parse(text);
        }
        
        /// <summary>
        /// 
        /// POST api/Entities
        /// </summary>
        public long CreatePerson(DemoWebApi.DemoData.Client.Person person)
        {
            var requestUri = new System.Uri(this.baseUri, "api/Entities");
            var responseMessage = this.client.PostAsJsonAsync(requestUri.ToString(), person).Result;
            responseMessage.EnsureSuccessStatusCode();
            var text = responseMessage.Content.ReadAsStringAsync().Result;
            return System.Int64.Parse(text);
        }
        
        /// <summary>
        /// 
        /// PUT api/Entities
        /// </summary>
        public async Task UpdatePersonAsync(DemoWebApi.DemoData.Client.Person person)
        {
            var requestUri = new System.Uri(this.baseUri, "api/Entities");
            var responseMessage = await client.PutAsJsonAsync(requestUri.ToString(), person);
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// PUT api/Entities
        /// </summary>
        public void UpdatePerson(DemoWebApi.DemoData.Client.Person person)
        {
            var requestUri = new System.Uri(this.baseUri, "api/Entities");
            var responseMessage = this.client.PutAsJsonAsync(requestUri.ToString(), person).Result;
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// DELETE api/Entities/{id}
        /// </summary>
        public async Task DeleteAsync(long id)
        {
            var template = new System.UriTemplate("api/Entities/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = await client.DeleteAsync(requestUri.ToString());
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// DELETE api/Entities/{id}
        /// </summary>
        public void Delete(long id)
        {
            var template = new System.UriTemplate("api/Entities/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = this.client.DeleteAsync(requestUri.ToString()).Result;
            responseMessage.EnsureSuccessStatusCode();
        }
    }
    
    public partial class Values
    {
        
        private System.Net.Http.HttpClient client;
        
        private System.Uri baseUri;
        
        public Values(System.Net.Http.HttpClient client, System.Uri baseUri)
        {
            this.client = client;
            this.baseUri = baseUri;
        }
        
        /// <summary>
        /// 
        /// GET api/Values
        /// </summary>
        public async Task<IEnumerable<System.String>> GetAsync()
        {
            var template = new System.UriTemplate("api/Values");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = await client.GetAsync(requestUri.ToString());
            responseMessage.EnsureSuccessStatusCode();
            var text = await responseMessage.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<IEnumerable<System.String>>(text);
        }
        
        /// <summary>
        /// 
        /// GET api/Values
        /// </summary>
        public System.Collections.Generic.IEnumerable<string> Get()
        {
            var template = new System.UriTemplate("api/Values");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = this.client.GetAsync(requestUri.ToString()).Result;
            responseMessage.EnsureSuccessStatusCode();
            var text = responseMessage.Content.ReadAsStringAsync().Result;
            return JsonConvert.DeserializeObject<IEnumerable<System.String>>(text);
        }
        
        /// <summary>
        /// 
        /// GET api/Values/{id}
        /// </summary>
        public async Task<System.String> GetAsync(int id)
        {
            var template = new System.UriTemplate("api/Values/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = await client.GetAsync(requestUri.ToString());
            responseMessage.EnsureSuccessStatusCode();
            var text = await responseMessage.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<string>(text);
        }
        
        /// <summary>
        /// 
        /// GET api/Values/{id}
        /// </summary>
        public string Get(int id)
        {
            var template = new System.UriTemplate("api/Values/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = this.client.GetAsync(requestUri.ToString()).Result;
            responseMessage.EnsureSuccessStatusCode();
            var text = responseMessage.Content.ReadAsStringAsync().Result;
            return JsonConvert.DeserializeObject<string>(text);
        }
        
        /// <summary>
        /// 
        /// POST api/Values
        /// </summary>
        public async Task PostAsync(string value)
        {
            var requestUri = new System.Uri(this.baseUri, "api/Values");
            var responseMessage = await client.PostAsJsonAsync(requestUri.ToString(), value);
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// POST api/Values
        /// </summary>
        public void Post(string value)
        {
            var requestUri = new System.Uri(this.baseUri, "api/Values");
            var responseMessage = this.client.PostAsJsonAsync(requestUri.ToString(), value).Result;
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// PUT api/Values/{id}
        /// </summary>
        public async Task PutAsync(int id, string value)
        {
            var template = new System.UriTemplate("api/Values/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = await client.PutAsJsonAsync(requestUri.ToString(), value);
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// PUT api/Values/{id}
        /// </summary>
        public void Put(int id, string value)
        {
            var template = new System.UriTemplate("api/Values/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = this.client.PutAsJsonAsync(requestUri.ToString(), value).Result;
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// DELETE api/Values/{id}
        /// </summary>
        public async Task DeleteAsync(int id)
        {
            var template = new System.UriTemplate("api/Values/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = await client.DeleteAsync(requestUri.ToString());
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// 
        /// DELETE api/Values/{id}
        /// </summary>
        public void Delete(int id)
        {
            var template = new System.UriTemplate("api/Values/{id}");
            var uriParameters = new System.Collections.Specialized.NameValueCollection();
            uriParameters.Add("id", id.ToString());
            var requestUri = template.BindByName(this.baseUri, uriParameters);
            var responseMessage = this.client.DeleteAsync(requestUri.ToString()).Result;
            responseMessage.EnsureSuccessStatusCode();
        }
    }
}
