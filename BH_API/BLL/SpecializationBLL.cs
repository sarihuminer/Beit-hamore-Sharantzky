using BLL.Converssins;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    public class SpecializationBLL
    {
        public static List<SpealitationDTO> GetAllSpecializations()
        {
           
                using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
                {
                   // return db.Specialization_Tbl.Select(s => new { specializationCode = s.specializationCode, specializationName = s.specializationName });
                List<Specialization_Tbl> routes = db.Specialization_Tbl.ToList();
                return SpecializationDTOConverssion.ConvertSpecializationTblToDTO(routes);
            }
            
            
        }

        public static List<SpealitationDTO> getSpealizettionbyRouteCode(int routeId)
        {
            List<SpealitationDTO> spealizeations =GetAllSpecializations();
            spealizeations=spealizeations.Where(s => s.routeCode == routeId).ToList();
            return spealizeations;
        }
    }
    

}
