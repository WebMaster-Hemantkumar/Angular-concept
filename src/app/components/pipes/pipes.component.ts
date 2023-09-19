import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  condition:boolean=false; 
  isloggedin:boolean=true;
  condition1:boolean=false;




  name='aman chaudhary';
  title1='freedom of india';
  coding='web developer';
  price : number = 100000;
  title:string="elos musk"


  todaydate = new Date();
  jsonval = {name:'peter', age:'22', address:{a1:'noida', a2:'delhi'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

}

     