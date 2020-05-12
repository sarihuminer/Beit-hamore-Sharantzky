using BLL.Converssins;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    public class RouteBLL
    {
        public static List<RouteDTO> GetAllRoutes()
        {
            using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
            {
                List<Route_Tbl> routes = db.Route_Tbl.ToList();
                return RoutesDTOConverssion.ConvertRoutesTblToDTO(routes);
            }
        }

        //public static List<RouteDTO> GetUserRoutes(string tz)
        //{
        //    using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
        //    {
        //        List<RegistrationToRoute_Tbl> routesR = db.RegistrationToRoute_Tbl.Where(rr => rr.studentCode == tz).ToList();
                    
        //       List<Route_Tbl> listRoutesTbl = db.Route_Tbl.Where(
        //         r =>
        //         db.RegistrationToRoute_Tbl.FirstOrDefault(
        //             rtr => rtr.studentCode == tz 
        //             ).RouteCode == r.routeCode
        //             ).ToList();

        //        return RoutesDTOConverssion.ConvertRoutesTblToDTO(listRoutesTbl);
        //    }
        //}
    }
}
