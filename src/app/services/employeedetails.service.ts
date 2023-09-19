import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  constructor(private http:HttpClient) { }

  url="https://newsapi.org/v2/everything?q=tesla&from=2023-07-06&sortBy=publishedAt&apiKey=8e5e1ef63eaf463585b87a05fa5da1f6"

  getdata(){
    return this.http.get(this.url);
  }
  
}
