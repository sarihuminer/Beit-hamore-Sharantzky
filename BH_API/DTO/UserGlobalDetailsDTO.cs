using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UserGlobalDetailsDTO
    {
        public UserDetailsDTO UserDetails { get; set; }
        public List<RouteDTO> ListRoutes { get; set; }
        public List<SpealitationDTO> ListSpealitation { get; set; }

    }
    
}
