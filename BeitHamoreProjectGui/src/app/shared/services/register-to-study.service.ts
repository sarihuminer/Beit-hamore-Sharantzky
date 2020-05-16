import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Route } from '../models/route.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserGlobalDetailsDTO } from '../models/UserGlobalDetails.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterToStudyService {
  perfix_url = "registerToRoutes/";
  GetglobalDetailsUser(tz: string): Observable<UserGlobalDetailsDTO> {
    return this.http.get<UserGlobalDetailsDTO>(environment.url + this.perfix_url + "GetglobalDetailsUser/" + tz);
  }
  constructor(private http: HttpClient) { }
}
