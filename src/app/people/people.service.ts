import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Promise } from 'rxjs/_esm2015';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor( private http:HttpClient ) { }

  getPeople(): Promise {
    return this.http.get('https://swapi.co/api/people/')
      .toPromise();
  }
}
