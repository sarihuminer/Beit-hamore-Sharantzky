//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class CourseToDomain_Tbl
    {
        public int domainCourseId { get; set; }
        public int courseId { get; set; }
        public int domainId { get; set; }
    
        public virtual Courses_Tbl Courses_Tbl { get; set; }
        public virtual Domains_Tbl Domains_Tbl { get; set; }
    }
}
