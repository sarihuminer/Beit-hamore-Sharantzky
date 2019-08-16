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
    [RoutePrefix("api/spealitations")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SpecializationController : ApiController
    {



        [HttpGet]
        [Route("getallroutespecializations/{routeId}")]
        public IHttpActionResult GetAllSpecializations(int routeId)
        {
            return Ok(SpecializationBLL.GetAllSpecializations());
        }

        [HttpGet]
        [Route("getSpealizettionbyRouteCode/{routeId}")]
        public IHttpActionResult getSpealizettionbyRouteCode(int routeId)
        {
            return Ok(SpecializationBLL.getSpealizettionbyRouteCode(routeId));
        }
    }
}
