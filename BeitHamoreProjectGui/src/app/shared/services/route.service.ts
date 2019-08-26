import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Route } from '../models/route.model';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class RouteService {
  perfix_url = "/routes";
  constructor(private http: HttpClient) { }
  getAllRoutes() {
    return this.http.get(environment.url + this.perfix_url + "get-all-routes");
  }
  getRautes(user: User) {
    return this.http.get(environment.url+this.perfix_url+user.userId) ;
}}
