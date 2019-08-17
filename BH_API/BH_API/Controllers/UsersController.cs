using BLL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using DAL;
using BLL;
namespace BH_API.Controllers
{
    [RoutePrefix("api/users")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        [HttpPost]
        [Route("register")]
        public IHttpActionResult Register([FromBody]DAL.Users_Tbl user)
        //לאן חוזר ההחזרה באנגולר ומה עושים עם זה
        {
            if (UsersBLL.Register(user))
                return Ok();
            else
                return BadRequest();
        }
        //get user by id
        [HttpGet]
        [Route("getUser/{tz}")]
        public IHttpActionResult GetUser([FromUri]string tz)
        {
            try
            {
                UserDetailsDTO u = new UserDetailsDTO();
                u = UsersBLL.GetUser(tz);
                  
                if (u != null)
                    return Ok(u);
            }
            catch (Exception)
            {

                return BadRequest();
            }
            return BadRequest();

        }
        [HttpGet]
        [Route("login/{tz}/{passw}")]
        public IHttpActionResult Login([FromUri]string tz, string passw)
        //לאן חוזר ההחזרה באנגולר ומה עושים עם זה
        {
            // List<DAL.StatusesToUsers_Tbl> listStatus = UsersBLL.Login(tz);


            //if (listStatus.Count > 0)
            // {
            UserDetailsDTO userDetailsDTO = new UserDetailsDTO();
            userDetailsDTO = UsersBLL.GetUserByTZAndPw(tz, passw);
            try
            {

                if (userDetailsDTO.StatusList.Count() > 0)
                {
                    
                    HttpCookie userTZCookie = new HttpCookie("UserTZ", userDetailsDTO.tz);
                    
                    return Ok(userDetailsDTO);//listStatus

                }
            }
            catch (Exception)
            {
                return BadRequest("Sory, Your password or tz is incorrect");
            }
            //אין הרשאות גישה רשום אבל לא מאושר
            return BadRequest("you are not alloud to log in yet ");
            //}
            //return Ok(Json<List<DAL.StatusesToUsers_Tbl>>(listStatus));
        }
    }
}
