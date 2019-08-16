using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BLL
{
    public static class CourseBLL
    {
        static BeitHamoreProjectEntities db = new BeitHamoreProjectEntities();

        
        public static List<CourseDTO> GetAllCourses()
        {
            //IQueryable<dynamic> listCourses = db.Courses_Tbl.Select(c => new { courseId = c.courseId, courseName = c.courseName });
            List < Courses_Tbl> courses= db.Courses_Tbl.ToList();
            return Converssins.CourseDTOConverssion.ConvertCourseTblToDTO(courses);
        }

        public static object getCourseByspealitation(int spealitationId)
        {
            List<CourseDTO> courses= GetAllCourses();
            courses = courses.Where(course => course.specializationCode == spealitationId).ToList();
            return courses;
        }


        public static Object GetCourseById(int id)
        { using (BeitHamoreProjectEntities db1  = new BeitHamoreProjectEntities())
            {
                var course = (db1 .Courses_Tbl.Where(h => h.courseId == id)
                    // .Select(c =>  new {name =  c.courseName })
                    .FirstOrDefault());
           
            return course;
               
        } }

       

        public static IQueryable<dynamic> GetCourseByTeachersId(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            db.Configuration.LazyLoadingEnabled = false;
            IQueryable<dynamic> listCourses = db.Courses_Tbl.Where(c=>c.teacherId==id).Select(c => new { courseId = c.courseId, courseName = c.courseName });
            return listCourses;
        }

        public static bool AddCourse(Courses_Tbl newCourse)
        {
            try
            {
                using (BeitHamoreProjectEntities db = new BeitHamoreProjectEntities())
                {
                    db.Courses_Tbl.Add(newCourse);
                    db.SaveChanges();

                }
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
