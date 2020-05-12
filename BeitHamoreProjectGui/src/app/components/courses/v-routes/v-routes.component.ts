import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route } from 'src/app/shared/models/route.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RouteService } from 'src/app/shared/services/route.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-routes',
  templateUrl: './v-routes.component.html',
  styleUrls: ['./v-routes.component.scss']
})
export class VRoutesComponent implements OnInit {
  routes:any;
  


  constructor(private routesService: RouteService,private DomSanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    debugger;
    console.log('הגיע למסלולים 1');
    this.routesService.getAllRoutes().subscribe(res => {
     if (res)
       this.routes = res;
    }, err => console.log(err)
    )
  }
  getSpealizetionsbyRoute( routeCode:number){
    debugger
    this.router.navigate(['view-spealitation',routeCode]);
  }
  // ee(routeCode){
  //   this.router.navigate(['/veiw-all=-spealization',{id:routeCode}])
  // }
}
