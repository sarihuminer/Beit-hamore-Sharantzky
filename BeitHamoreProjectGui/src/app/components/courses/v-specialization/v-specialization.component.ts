import { Component, OnInit } from '@angular/core';
import { SpealitationService } from 'src/app/shared/services/spealitation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-v-specialization',
  templateUrl: './v-specialization.component.html',
  styleUrls: ['./v-specialization.component.scss']
})
export class VSpecializationComponent implements OnInit {
spealitations:any;
  routeid: number;
  constructor(private route: ActivatedRoute, private spealitationService:SpealitationService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(x => this.routeid = x.id);
  //   this.spealitationService.getAllSpealitation().subscribe(res => {
  //     if (res)
  //       this.spealitations = res;
  //    }, err => console.log(err)
  //    )

  // }
this.spealitationService.getSpealizettionbyRouteCode(this.routeid).subscribe(res=>{
  if(res)
  this.spealitations=res;
},err=>console.log(err)
)
}
getCoursesbySpealizetion(spealitationCode:number){
  this.router.navigate(['view-courses',spealitationCode]);

}
}
