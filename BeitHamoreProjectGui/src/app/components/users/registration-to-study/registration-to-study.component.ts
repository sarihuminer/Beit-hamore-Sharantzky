import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterToStudyService } from 'src/app/shared/services/register-to-study.service';
import { UserService } from 'src/app/shared/services/user-service.service';
import { Route } from 'src/app/shared/models/route.model';
import { Specialization } from 'src/app/shared/models/specialization.model';
import { Teachers } from 'src/app/shared/models/teachers.model';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { RouteService } from 'src/app/shared/services/route.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from 'src/app/shared/models/course.model';
import { UserGlobalDetailsDTO } from 'src/app/shared/models/UserGlobalDetails.model';
import { UserDetails } from 'src/app/shared/models/userDetails.model';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

/** @title Form field with label */
@Component({
  selector: 'app-registration-to-study',
  templateUrl: './registration-to-study.component.html',
  styleUrls: ['./registration-to-study.component.css']
})
export class RegistrationToStudyComponent implements OnInit {
  response: UserGlobalDetailsDTO;
  routeId: Route;
  routes: Route[] = [];
  userDetails: UserDetails = new UserDetails();
  spealization: Specialization[] = [];
  courses: Course[] = [];
  speakers: Teachers[];
  // options: FormGroup = new FormGroup();
  routesControl = new FormControl();
  usesrControl = new FormControl();
  spealizationControl = new FormControl();
  myControl = new FormControl();
  options2: string[] = ['אחד', 'שתיים', 'שלוש'];
  filteredOptions: Observable<string[]>;
  filteredRoutes: Observable<Route[]>;
  name: string = 'אורחת';
  user: any;

  constructor(private registerToStudyService: RegisterToStudyService, private userService: UserService, private routeService: RouteService, private DomSanitizer: DomSanitizer, private router: Router) { }

  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();

    return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  private _filterR(value: string): Route[] {
    debugger;
    const filterValue = value.toLowerCase();

    return this.routes.filter(option => option.routeName.toLowerCase().indexOf(filterValue) === 0);
  }
  // private _filterR(value: string): Route[] {
  //   debugger;
  //   const filterValue = value.toLowerCase();

  //   return this.routes.filter(option => option.routeName.toLowerCase().indexOf(filterValue) === 0);
  // }
  ngOnInit() {


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filteredRoutes = this.routesControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterR(value))
    );

    this.user = this.userService.getUserById(localStorage.getItem("currentUserTz")).subscribe(res => {

      if (res) {
        this.user = res;
        this.name = res.firstName + " " + res.lastName;
      }

    }, err => console.log(err)
    );
    this.registerToStudyService.GetglobalDetailsUser(localStorage.getItem("currentUserTz")).subscribe(res => {
      if (res) {
        this.response = res;
        debugger;
        console.log(this.response);
        this.routes = res.ListRoutes;
        console.log(this.routes[0].routeCode)
        console.log(this.routes[0].diplomaID)
        console.log(this.routes[0].img)
        console.log(this.routes[0].routeName)
        this.courses = res.ListCourses;
        this.spealization = res.ListSpealitation;
        this.userDetails = res.UserDetails;

      }
    }, err => console.log(err))
  }
  try() {
    this.routes.forEach(element => {
      console.log(element.routeName);
    });

  }
  selectedRoute(r: Route) {
    console.log(r.routeCode);
  }
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








