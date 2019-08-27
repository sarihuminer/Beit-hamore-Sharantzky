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
   public class UserDetailsDTOConverssion
    {
        public static UserDetailsDTO GetStatusNamesForUser(Users_Tbl user)
        {

            using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
            {
                if (user != null)
                {
                   
              var tt= new UserDetailsDTO
                    {
                        tz = user.tz,
                        userId = user.userId,
                        city = user.city,
                        emailAddress = user.emailAddress,
                        firstName = user.firstName,
                        houseNumber = user.houseNumber,
                        lastName = user.lastName,
                        phone = user.phone,
                        passwordSHA256 = user.passwordSHA256,
                        street = user.street,
                        StatusList = db.StatusesToUsers_Tbl.Include(st=>st.Status_Tbl).Where(st => st.userId ==
                          user.userId && st.isApproved.Value == 1).ToList().Select(sp =>StatusDTOConverssions.GetStatus( sp.Status_Tbl)).ToList()
                    };
                    return tt;
                   
                }
                return null;
            }



        }

    }
}
