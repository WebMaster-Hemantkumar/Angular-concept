import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamdetailsService {

  constructor(private http:HttpClient) { }

  url="https://jsonplaceholder.typicode.com/comments"

  getdata(){
    return this.http.get(this.url);
  }
}


