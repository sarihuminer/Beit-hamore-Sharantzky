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
    
    public partial class RegistrationToRoute_Tbl
    {
        public int Id { get; set; }
        public int RouteCode { get; set; }
        public string studentCode { get; set; }
        public int year { get; set; }
    
        public virtual Route_Tbl Route_Tbl { get; set; }
    }
}
