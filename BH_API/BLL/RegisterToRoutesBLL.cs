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

        public static UserGlobalDetailsDTO GetglobalDetails(string tz)
        {
            using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
            {
                UserGlobalDetailsDTO userGlobalDetailsDTO = new UserGlobalDetailsDTO();


               List<Route_Tbl> listRoutesTbl = db.Route_Tbl.Where(
                 r =>
                 db.RegistrationToRoute_Tbl.FirstOrDefault(
                     rtr => rtr.studentCode == tz && r.routeCode == rtr.RouteCode
                     ).RouteCode == r.routeCode
                     ).ToList();
                  userGlobalDetailsDTO.ListRoutes = RoutesDTOConverssion.ConvertRoutesTblToDTO(listRoutesTbl);
                //user
               userGlobalDetailsDTO.UserDetails= UserDetailsDTOConverssion.GetStatusNamesForUser( db.Users_Tbl.First(s => s.tz == tz));

                // userGlobalDetailsDTO.ListSpealitation = SpecializationDTOConverssion.ConvertSpecializationTblToDTO(

                List<Specialization_Tbl> yy = db.Specialization_Tbl.ToList();
                userGlobalDetailsDTO.ListSpealitation = new List<SpealitationDTO>();
                foreach (var item in userGlobalDetailsDTO.ListRoutes)
                {
                    List<Specialization_Tbl> x = db.Specialization_Tbl.Where(s => s.routeCode==item.routeCode).ToList();
                    if (x.Count>0)
                    {
                        userGlobalDetailsDTO.ListSpealitation.AddRange(SpecializationDTOConverssion.ConvertSpecializationTblToDTO(x));
                    }
                }
                userGlobalDetailsDTO.ListCourses = new List<CourseDTO>();
                foreach (var item in userGlobalDetailsDTO.ListSpealitation)
                {
                    List<Courses_Tbl> x = db.Courses_Tbl.Where(c => c.specializationCode == item.specializationCode).ToList();
                    if (x.Count > 0)
                    {
                        userGlobalDetailsDTO.ListCourses.AddRange(CourseDTOConverssion.ConvertCourseTblToDTO(x));
                    }
                }    
               //db.Specialization_Tbl.Where(
               //     sp => listRoutesTbl.Any(
               //         route=>
               //          sp.routeCode == route.routeCode
               //         ))
               //     .ToList();
                            
                             
                       

                //List< Specialization_Tbl> yy = db.Specialization_Tbl.Where(
                //      sp =>
                //     userGlobalDetailsDTO.ListRoutes.ToList().Where(
                //         route => route.routeCode == sp.routeCode
                //         ).FirstOrDefault().routeCode == sp.routeCode

                //      ).ToList();
               // );

               
                return userGlobalDetailsDTO;
            }
        }
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