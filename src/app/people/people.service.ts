import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Promise } from 'rxjs/_esm2015';
import { PeopleResponse } from '../shared/models/people-response'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor( private http:HttpClient ) { }

  getPeople(): Promise<PeopleResponse> {
    return this.http.get<PeopleResponse>('https://swapi.co/api/people/')
      .toPromise();
  }

  getPeoplePaginated(url): Promise<PeopleResponse> {
    return this.http.get<PeopleResponse>(url)
      .toPromise();
  }
}
