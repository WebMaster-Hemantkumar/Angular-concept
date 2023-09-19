import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  ngOnInit(){
   
  }
  constructor( private _router:Router){}


  goToHome() {
    if (confirm('Are you sure you want to navigate to the Home page?')) {
      this._router.navigate(['/']);
    } else {
      this._router.navigate([this._router.url]);
    }
  }

  goToPipe() {
    if (confirm('Are you sure you want to navigate to the goToPipe page?')) {
      this._router.navigate(['PipesComponent']);
    } else {
      this._router.navigate([this._router.url]);
    }
  }

 goToTdf(){
  if (confirm('Are you sure you want to navigate to the goToPipe page?')) {
    this._router.navigate(['tempalte-driven']);
  } else {
    this._router.navigate([this._router.url]);
  }
}

gotolink(){
 if (confirm('Are you sure you want to navigate to the gotolink page')) {
    this._router.navigate(['link']);
 } else{
  this._router.navigate([this._router.url]);
 }

}

gotofeatures(){
  if (confirm('Is this your personal choice to navigate the gotofeatures page')){
    this._router.navigate(['features']);
  } else{
    this._router.navigate([this._router.url]);
  }
}

gototemplateform(){
  if(confirm('Do you want  to navigate the gotofeatures page')){
    this._router.navigate(['templateform']);
  } else{
    this._router.navigate([this._router.url]);
  }
}



}

