import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from 'src/person';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'posts')
    return this.http.get<Person[]>(this.baseURL + 'posts')
  }


  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'posts', body,{'headers':headers})
  }
}
