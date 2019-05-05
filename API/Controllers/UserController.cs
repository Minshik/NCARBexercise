using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TestApi1.Models;

namespace TestApi1.Controllers
{
    [EnableCors("*", "*", "*")] 
    public class UserController : ApiController
    {
        Person[] people = new Person[]
        {
            new Person { Id = 1, FirstName = "Michael", LastName = "Jordan", JobTitle= "Basket Ball Player" },
            new Person { Id = 2, FirstName = "Lionel", LastName = "Messi", JobTitle= "Soccer Player" }
        };

        // GET api/user
        public IEnumerable<Person> GetAllProducts()
        {
            return people;
        }

        // GET api/user/1
        public IHttpActionResult GetProduct(int id)
        {
            var person = people.FirstOrDefault((p) => p.Id == id);
            if (person == null)
            {
                return NotFound();
            }
            return Ok(person);
        }

        // PUT api/user/1
        public void Put(int id, [FromBody] Person person)
        {
            var originalPerson = people.FirstOrDefault((p) => p.Id == id);
            System.Diagnostics.Debug.WriteLine("User data updated: Id = "+ person.Id);
            System.Diagnostics.Debug.WriteLine("First Name: " + originalPerson.FirstName + " => " + person.FirstName);
            System.Diagnostics.Debug.WriteLine("Last Name: " + originalPerson.LastName + " => " + person.LastName);
            System.Diagnostics.Debug.WriteLine("Job Title: " + originalPerson.JobTitle + " => " + person.JobTitle);
        }
    }
}
