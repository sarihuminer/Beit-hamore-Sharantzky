using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BH_API.Controllers
{
    [RoutePrefix("api/registerToRoutes")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RegisterToRoutesController : ApiController
    {
        [HttpGet]
        [Route("get-routes/{tz}")]
        public IHttpActionResult GetglobalDetails([FromUri]string tz)
        {
            return Ok(RegisterToRoutesBLL.GetglobalDetails(tz));
        }

    }
}
