import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { RouteService } from 'src/app/shared/services/route.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { RegisterToStudyService } from 'src/app/shared/services/register-to-study.service';
import { UserService } from 'src/app/shared/services/user-service.service';
import { Route } from 'src/app/shared/models/route.model';
import { UserDetails } from 'src/app/shared/models/userDetails.model';
import { Specialization } from 'src/app/shared/models/specialization.model';
import { Course } from 'src/app/shared/models/course.model';
import { Teachers } from 'src/app/shared/models/teachers.model';
export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-try-ac-g',
  templateUrl: './try-ac-g.component.html',
  styleUrls: ['./try-ac-g.component.css']
})
export class TryAcGComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',

  });
  routes: Route[] = [];
  userDetails: UserDetails = new UserDetails();
  spealization: Specialization[] = [];
  courses: Course[] = [];
  speakers: Teachers[];
  name: string = 'אורחת';
  user: any;
  g = new FormControl();
  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private registerToStudyService: RegisterToStudyService, private userService: UserService, private routeService: RouteService, private DomSanitizer: DomSanitizer, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.userService.getUserById(localStorage.getItem("currentUserTz")).subscribe(res => {

      if (res) {
        this.user = res;
        this.name = res.firstName + " " + res.lastName;
      }

    }, err => console.log(err)
    );
    this.registerToStudyService.GetglobalDetailsUser(localStorage.getItem("currentUserTz")).subscribe(res => {
      if (res) {
        this.routes = res.ListRoutes;
        this.courses = res.ListCourses;
        this.spealization = res.ListSpealitation;
        this.userDetails = res.UserDetails;

      }
    }, err => console.log(err))

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

}
