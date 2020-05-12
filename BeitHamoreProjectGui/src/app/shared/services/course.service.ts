import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Route } from '../models/route.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  

  getRoutes():Observable<Route[]>{
    return this.http.get<Route[]>(environment.url + "routes/getallroutes");
  }
  addCourse(course: Course) {
  
  this.http.post(environment.url+"courses/AddCourse",course).subscribe(x=>{
    alert("adding  the course successfully!");
  },
   (error)=>{alert("problem!! with adding  the course the course wasnot added!!!")}
  );}
  // basicURL:string= environment.url + "courses/";
  constructor(private http:HttpClient) { }

  getAllCourses2(){
    return this.http.get(environment.url + "courses/getAllCourses");
  }
  
  getAllCourses() :Observable<Course[]>{  
  
   // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.get<Course[]>(environment.url + "courses/getAllCourses");
  }  

  getCourseByspealitation(spealitationCode: number) :Observable<Course[]>  
  {
     return this.http.get<Course[]>(environment.url + "courses/getCourseByspealitation/"+spealitationCode);
   }
}
  