using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL.Converssins
{
  public  class CourseDTOConverssion
    {
        public static List<CourseDTO> ConvertCourseTblToDTO(List<Courses_Tbl> list_courses)
        {
            List<CourseDTO> list_course_dto = new List<CourseDTO>();
            foreach (var course in list_courses)
            {
                list_course_dto.Add(new CourseDTO() { courseId = course.courseId, courseName = course.courseName,
                    teacherId = course.teacherId, totalHours = course.totalHours,routeCode=course.routeCode,specializationCode=course.specializationCode });
            }

            return list_course_dto;
        }
    }
}
