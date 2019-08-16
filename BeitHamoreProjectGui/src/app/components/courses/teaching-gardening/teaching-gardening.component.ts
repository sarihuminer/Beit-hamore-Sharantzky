import { Component, OnInit } from '@angular/core';
//import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-teaching-gardening',
  templateUrl: './teaching-gardening.component.html',
  styleUrls: ['./teaching-gardening.component.css']
})
export class TeachingGardeningComponent implements OnInit {

  constructor() { }
//routeService:RouteService
  ngOnInit() {
    
  }

  education: string = "";

  change(id: string) {
    debugger
    if (id == 'gardening')
      this.education = 'gardening';
    else
      this.education = 'teaching';
    console.log("id: " + id);
  }
  // getAllRoutes(){
  //   this.
  // }

}
