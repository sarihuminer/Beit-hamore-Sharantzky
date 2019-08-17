import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component'
import { IndexComponent } from './components/courses/index/index.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { VRoutesComponent } from './components/courses/v-routes/v-routes.component';
import { VSpecializationComponent } from './components/courses/v-specialization/v-specialization.component';
import { VCoursesComponent } from './components/courses/v-courses/v-courses.component';
import { RegistrationToStudyComponent } from './components/users/registration-to-study/registration-to-study.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'index', component: IndexComponent },
  { path: 'Menunav', component: MenunavComponent },
  { path: 'view-all-routes', component: VRoutesComponent },
  { path: 'view-all-spealitation', component: VSpecializationComponent },
  {path:"view-spealitation/:id", component:VSpecializationComponent},
  {path:"view-courses/:id", component:VCoursesComponent},
  { path: 'registerTostudy', component: RegistrationToStudyComponent },
  // { path: 'view-all-spealitation/:id', component: VSpecializationComponent }
 
  // { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [

    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
