using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BH_API.Controllers
{ [RoutePrefix("api/routes")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RouteController : ApiController
    {
       
        
            [HttpGet]
            [Route("get-all-routes")]
            public IHttpActionResult GetAllRoutes()
            {
                return Ok(RouteBLL.GetAllRoutes());
            }
        
    }
}
