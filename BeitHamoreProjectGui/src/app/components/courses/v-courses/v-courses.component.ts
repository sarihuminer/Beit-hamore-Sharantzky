import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-v-courses',
  templateUrl: './v-courses.component.html',
  styleUrls: ['./v-courses.component.scss']
})
export class VCoursesComponent implements OnInit {
  courses:any;
  spealitationCode: any;
  constructor(private route: ActivatedRoute, private courseServise:CourseService,private router:Router) 
{

}
  ngOnInit() {
    this.route.params.subscribe(x => this.spealitationCode = x.id);
    this.courseServise.getCourseByspealitation(this.spealitationCode).subscribe(res=>{
      if(res)
      this.courses=res;
    },err=>console.log(err)
    )
  }

}
