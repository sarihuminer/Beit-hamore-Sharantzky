using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BLL;

namespace BH_API.Controllers
{
    [RoutePrefix("api/courses")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CoursesController : ApiController
    {
        [HttpGet]
        [Route("getAllCourses")]
        public IHttpActionResult GetAllCourses()
        {
            return Ok(CourseBLL.GetAllCourses());
        }
        [HttpGet]
        [Route("getCourseByspealitation/{spealitationId}")]
        public IHttpActionResult getCourseByspealitation(int spealitationId)
        {
            return Ok(CourseBLL.getCourseByspealitation(spealitationId));
        }
        [HttpGet]
        [Route("getCourseById/{id}")]
        public IHttpActionResult GetCourseById(int id)
        {
            return Ok(CourseBLL.GetCourseById(id));
        }

        [HttpGet]
        [Route("getCourseByTeachersId/{id}")]
        public IHttpActionResult GetCourseByTeachersId(int id)
        {
            return Ok(CourseBLL.GetCourseByTeachersId(id));
        }
        [HttpPost]
        [Route("AddCourse")]
        public IHttpActionResult AddCourse([FromBody]DAL.Courses_Tbl newCourse)
//todo: יש לבדוק שאין לנו קוד זהה בקורסים הקימים!
        {
            if (CourseBLL.AddCourse(newCourse))
                return Ok();
            else
                return BadRequest();
        }
    }
}
