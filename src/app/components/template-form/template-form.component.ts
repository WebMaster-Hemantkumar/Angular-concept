import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Person } from 'src/person';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  title = 'httpGet Example';
  people:any=[];
  person = new Person();
  constructor(private apiService:CrudService) {}
  ngOnInit(): void {
    
  }
  
  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })      
 
  }
 
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }
 

}
