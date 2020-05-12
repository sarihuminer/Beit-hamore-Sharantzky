import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpealitationService {
  perfix_url = "spealitations";
  constructor(private http: HttpClient) { }
  getAllSpealitation() {
    return this.http.get(environment.url + this.perfix_url + "/getallroutespecializations/"+201);
  }
  getSpealizettionbyRouteCode(routeid:number){
    return this.http.get(environment.url+this.perfix_url+"/getSpealizettionbyRouteCode/"+routeid)
  }

}0
