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
    public class SpecializationDTOConverssion
    {
        public static List<SpealitationDTO> ConvertSpecializationTblToDTO(List<Specialization_Tbl> list_specialization)
        {
            List<SpealitationDTO> list_specialization_dto = new List<SpealitationDTO>();
            foreach (var specialization in list_specialization)
            {
                list_specialization_dto.Add(new SpealitationDTO()
                {
                    routeCode=specialization.routeCode,
                    specializationCode=specialization.specializationCode,
                    specializationName=specialization.specializationName

                });
            }

            return list_specialization_dto;
        }

    }
}