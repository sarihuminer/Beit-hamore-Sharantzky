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
    
    public partial class Specialization_Tbl
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Specialization_Tbl()
        {
            this.Courses_Tbl = new HashSet<Courses_Tbl>();
            this.DiplomaHours_Tbl = new HashSet<DiplomaHours_Tbl>();
            this.registrationzationToSpeciali_Tbl = new HashSet<registrationzationToSpeciali_Tbl>();
            this.SpecializationsToRoutes_Tbl = new HashSet<SpecializationsToRoutes_Tbl>();
        }
    
        public int specializationCode { get; set; }
        public int routeCode { get; set; }
        public string specializationName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Courses_Tbl> Courses_Tbl { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DiplomaHours_Tbl> DiplomaHours_Tbl { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<registrationzationToSpeciali_Tbl> registrationzationToSpeciali_Tbl { get; set; }
        public virtual Route_Tbl Route_Tbl { get; set; }
        public virtual Route_Tbl Route_Tbl1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SpecializationsToRoutes_Tbl> SpecializationsToRoutes_Tbl { get; set; }
    }
}