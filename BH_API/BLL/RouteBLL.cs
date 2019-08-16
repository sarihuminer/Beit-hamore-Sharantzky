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
    }
}
