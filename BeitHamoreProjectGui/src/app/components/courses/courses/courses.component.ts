import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/services/course.service';
import{Course}from 'src/app/shared/models/course.model';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
allCourses:Course[]=[];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(res => {
     this.allCourses=res;
      console.log(res);
  
    }, err => {
      console.log(err);
    })
  }

}
