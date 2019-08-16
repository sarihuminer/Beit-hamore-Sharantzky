using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using DTO;

namespace BLL
{
    public class UsersBLL
    {
        public static bool Register(Users_Tbl user)
        {

            try
            {
                using (BeitHamoreProjectEntities db1 = new BeitHamoreProjectEntities())
                {
                    db1.Users_Tbl.Add(user);
                    db1.SaveChanges();
                }
                return true;
            }
            catch (Exception e)
            {           
                return false;
            }
        }
        public static List<StatusesToUsers_Tbl> Login(Users_Tbl user)
        {
            try
            {
                List<StatusesToUsers_Tbl> list = new List<StatusesToUsers_Tbl>();
                using (BeitHamoreProjectEntities db1 = new BeitHamoreProjectEntities())
                {
                    Users_Tbl currentUser = db1.Users_Tbl.FirstOrDefault(u => u.passwordSHA256 == user.passwordSHA256 && u.tz == user.tz);
                    if (currentUser == null)
                    {
                        return list.ToList();
                    }
                    else
                    {
                       list= db1.StatusesToUsers_Tbl.Where(stu => stu.userId == currentUser.userId).ToList();
                        return list.ToList();
                    }
                }          
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static UserDetailsDTO GetUserByTZAndPw(string tz,string passw)
        {
            using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
            {
                var user = db.Users_Tbl.Where(u => u.tz == tz && u.passwordSHA256==passw).FirstOrDefault();
                if(user!=null)
                return Converssins.UserDetailsDTOConverssion.GetStatusNamesForUser(user);
                return null;
            }
        }
    }
}