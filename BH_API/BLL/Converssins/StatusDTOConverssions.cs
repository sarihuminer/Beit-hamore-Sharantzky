using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL.Converssins
{
   public class StatusDTOConverssions
    {
        public static StatusDTO GetStatus(Status_Tbl status)
        {
            return new StatusDTO
            {
                statusId = status.statusId,
                nameStatus = status.nameStatus
            };
        }
    }
}
