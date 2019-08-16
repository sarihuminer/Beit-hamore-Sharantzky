import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService,private DomSanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
  }


  login() {
 
    this.userService.login(this.user).subscribe(res => {
     console.log(res);
     localStorage.setItem("currentUserTz",res.tz);
     console.log(localStorage.getItem("currentUserTz"))
    }, err => {
      //alert(err);
      this.router.navigate(['register']);
      console.log(err,"user not found");
    })
  }
}
