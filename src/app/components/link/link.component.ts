import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../../services/employeedetails.service';


@ Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  isLoggedIn :boolean=true;
  condition:boolean=true;
  price : number = 20000;

  
  title = 'Angular 4 Project!';
  
  
  todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  constructor(private employeedetails:EmployeedetailsService){}

  ngOnInit() {
   
  }
 
}
