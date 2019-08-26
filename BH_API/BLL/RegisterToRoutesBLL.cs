using BLL.Converssins;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    public class RegisterToRoutesBLL
    {
        //public static List<RouteDTO> GetRoutes(string tz)
        //{
        //    using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
        //    {
        //        List<RegistrationToRoute_Tbl> routes = db.RegistrationToRoute_Tbl.Where(s => s.Id == tz).ToList();
        //    }
        //}
    public static List<RouteDTO> GetAllRoutes()
    {
        using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
        {
            List<Route_Tbl> routes = db.Route_Tbl.ToList();
            return RoutesDTOConverssion.ConvertRoutesTblToDTO(routes);
        }
    }
}
}