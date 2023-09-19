import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {
    // stop here if form is invalid
    if (f.invalid) {
        return;
    }
  
console.log(f.value);

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(f.value, null, 4));
}

  countryList:any = [
    {id:'1',name:'India'},
    {id:'2',name:'USA'},
    {id:'3',name:'England'},
    
  ];

  
}
