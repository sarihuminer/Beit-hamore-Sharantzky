using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UserDetailsDTO
    {
        public int userId { get; set; }
        public string passwordSHA256 { get; set; }
        public string tz { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public int? houseNumber { get; set; }
        public string phone { get; set; }
        public string emailAddress { get; set; }
        public List<StatusDTO> StatusList { get; set; }

      
    }
}
