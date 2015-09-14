﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DemoWebApi.DemoData;
using System.Diagnostics;

namespace DemoWebApi.Controllers
{
    public class EntitiesController : ApiController
    {
        [HttpGet]
        public Entity Get(long id)
        {
            return new Person()
            {
                Surname = "Huang",
                GivenName = "Z",
                Name = "Z Huang",
            };
        }

        [HttpPost]
        public long CreatePerson(Person person)
        {
            Debug.WriteLine("Create " + person);
            return 1000;
        }

        [HttpPut]
        public void UpdatePerson(Person person)
        {
            Debug.WriteLine("Update " + person);
        }

        [HttpDelete]
        public void Delete(long id)
        {
            Debug.WriteLine("Delete " + id);
        }

        
    }
}
