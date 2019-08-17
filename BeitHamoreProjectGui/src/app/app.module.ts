import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { RegistrationComponent } from './components/users/registration/registration.component';

import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material.module';
import { IndexComponent } from './components/courses/index/index.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { TeachingComponent } from './components/courses/teaching/teaching.component';
import { VRoutesComponent } from './components/courses/v-routes/v-routes.component';
import { VSpecializationComponent } from './components/courses/v-specialization/v-specialization.component';
import { VCoursesComponent } from './components/courses/v-courses/v-courses.component';
import { RegistrationToStudyComponent } from './components/users/registration-to-study/registration-to-study.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,
    RegistrationComponent,
    AddCourseComponent,
    IndexComponent,
    MenunavComponent,
    TeachingComponent,
    VRoutesComponent,
    VSpecializationComponent,
    VCoursesComponent,
    RegistrationToStudyComponent,
  ],
  imports: [
  //  MaterialModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    

  ],
  //exports:[ MaterialModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
