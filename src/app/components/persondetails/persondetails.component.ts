import { Component, OnInit } from '@angular/core';
import { PersnalService } from 'src/app/services/persnal.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit{
  [x: string]: any;
 
  Userdata: any;

  constructor(private Persnal:PersnalService){}
  ngOnInit(): void {
    this.Persnal.getUserdata().subscribe({
      next: result => {
        this.Userdata = result;
    },
    error: error => {
        this['errorMessage'] = error.message;
       console.error('There was an error!', error);
        alert('There was an error!')
    }
    })
    
  }
 

}
