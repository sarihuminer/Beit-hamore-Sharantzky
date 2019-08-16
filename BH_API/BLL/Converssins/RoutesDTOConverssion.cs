using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
namespace BLL.Converssins
{
    public class RoutesDTOConverssion
    {
        public static List<RouteDTO> ConvertRoutesTblToDTO(List<Route_Tbl> list_route)
        {
            List<RouteDTO> list_route_dto = new List<RouteDTO>();
            foreach (var route in list_route)
            {
                list_route_dto.Add(new RouteDTO() { diplomaID = route.diplomaID, routeCode = route.routeCode, routeName = route.routeName,img=route.img });
            }

            return list_route_dto;
        }

    }
}