import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-routeparameter',
  templateUrl: './routeparameter.component.html',
  styleUrls: ['./routeparameter.component.css']
})
export class RouteparameterComponent implements  OnInit {
  id: any
  constructor(private route:Router) {}
Persons:any=[
  {id:1,name:'Hemant',classs:'MCA',Dept:'php'},
  {id:2,name:'Amit',classs:'MCA',Dept:'php'},
  {id:3,name:'Rinku',classs:'MCA',Dept:'php'},
  {id:4,name:'Sumit',classs:'MCA',Dept:'php'},
]

  ngOnInit(){
    
  }
  goToProductDetails(id:any) {
    this.route.navigate(['/persondetails', id]);
  }
 

}
