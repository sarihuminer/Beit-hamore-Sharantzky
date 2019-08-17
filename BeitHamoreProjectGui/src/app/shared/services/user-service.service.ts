import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basicURL:string="http://localhost:58521/api/users"
  constructor(private http:HttpClient) { }

  login(user:User):Observable<User>{
   
  var c= this.http.get<User>(this.basicURL+"/login/"+user.tz+"/"+user.passwordSHA256);
  
  return c;
  }
  
   
register(user:User){
return this.http.post(this.basicURL+"/register",user);
}
getUserById(tz:string):Observable<any>{
  
  return this.http.get<User>(this.basicURL+"/getUser/"+tz);

 
  }
}
