using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class CourseDTO
    {
        public int courseId { get; set; }
        public string courseName { get; set; }
        public int teacherId { get; set; }
        public int totalHours { get; set; }
        public Nullable<int> routeCode { get; set; }
        public Nullable<int> specializationCode { get; set; }
    }
}
