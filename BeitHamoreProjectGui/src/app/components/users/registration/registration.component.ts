import { Component, OnInit } from '@angular/core';
import{User}from 'src/app/shared/models/user.model'
import {UserService}from 'src/app/shared/services/user-service.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user:User=new User();
  constructor(private service: UserService) { }

  ngOnInit() {
  }
register(){
  
  this.service.register(this.user).subscribe(res=> {
    alert("success!");
  },
   (error) => {alert("error")}
  );;
}
}
