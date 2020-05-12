import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, from} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterToStudyService } from 'src/app/shared/services/register-to-study.service';
import { UserService } from 'src/app/shared/services/user-service.service';
import { Route } from 'src/app/shared/models/route.model';
import { Specialization } from 'src/app/shared/models/specialization.model';
import { Teachers } from 'src/app/shared/models/teachers.model';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { RouteService } from 'src/app/shared/services/route.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Course } from 'src/app/shared/models/course.model';
import { UserGlobalDetailsDTO } from 'src/app/shared/models/UserGlobalDetails.model';
import { UserDetails } from 'src/app/shared/models/userDetails.model';
import { JsonPipe } from '@angular/common';
/** @title Form field with label */
@Component({
  selector: 'app-registration-to-study',
    templateUrl: './registration-to-study.component.html',
    styleUrls: ['./registration-to-study.component.css']
})
export class RegistrationToStudyComponent implements OnInit{
  routes:Route[]=[];
  userDetails:UserDetails=new UserDetails();
  spealization:Specialization[]=[];
  courses:Course[]=[];
  speakers:Teachers[];
  options: FormGroup;
  myControl = new FormControl();
  options2: string[] = ['אחד', 'שתיים', 'שלוש'];
  filteredOptions: Observable<string[]>;
name:string='אורחת';
user:any;

constructor( private registerToStudyService:RegisterToStudyService,private userService: UserService,private routeService:RouteService, private DomSanitizer: DomSanitizer, private router: Router) { }
  
private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
    this.user=this.userService.getUserById(localStorage.getItem("currentUserTz")).subscribe(res=>
      {
        
        if(res){
           this.user=res;
           this.name=res.firstName+" "+res.lastName;
        }
       
      },err=>console.log(err)
      );
      this.registerToStudyService.GetglobalDetailsUser(localStorage.getItem("currentUserTz")).subscribe(res=>
{
  if(res){
        this.routes=res.ListRoutes;
        this.courses=res.ListCourses;
        this.spealization=res.ListSpealitation;
        this.userDetails=res.UserDetails;
        alert("גגגגגגגגגגגגגגגגג");
       alert(res.UserDetails.emailAddress);
console.log(this.routes);
console.log(this.courses);
console.log(this.spealization);
console.log(this.userDetails);
      }
    },err=>console.log(err))}

      //   {
      // this.routes=this.routeService.getRautes(this.user).subscribe(res=>
      // {
      //   if(res){
      //     this.routes=res;
      //   }
      // },err=>console.log(err)
      
  

//   constructor(fb: FormBuilder,private routeService:RouteService, private userService:UserService, private router: Router) 
//  {
//     this.options = fb.group({
//       hideRequired: false,
//       floatLabel: 'auto',
//     });

    
  }

  





  
