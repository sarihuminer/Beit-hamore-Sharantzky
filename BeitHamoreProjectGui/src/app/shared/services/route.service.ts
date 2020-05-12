import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Route } from '../models/route.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Routes } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteService {
  perfix_url = "routes/";
  constructor(private http: HttpClient) { }
  getAllRoutes():Observable<Route[]> {
    debugger;
    return this.http.get<Route[]>(environment.url + this.perfix_url + "get-all-routes");
  }
//   getRautesByUser(user: User):Observable<Route[]> {
//     return this.http.get<Route[]>(environment.url+this.perfix_url+"getRautesByUser/"+user.userId) ;
// }
}