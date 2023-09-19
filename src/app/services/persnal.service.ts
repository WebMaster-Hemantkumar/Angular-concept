import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersnalService {

  constructor(private http:HttpClient) { }
ApiUrl="https://jsonplaceholder.typicode.com/users2"
  getUserdata(){
   return this.http.get(this.ApiUrl);
  }
}
