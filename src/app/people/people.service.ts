import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Promise } from 'rxjs/_esm2015';
import { PeopleResponse } from '../shared/models/people-response'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private fistEndPoint = 'https://swapi.co/api/people/'

  constructor( private http:HttpClient ) { }

  getPeopleFirstTime(): Promise<PeopleResponse> {
    return this.getPeoplePaginated(this.fistEndPoint);
  }

  getPeoplePaginated(url): Promise<PeopleResponse> {
    return this.http.get<PeopleResponse>(url)
      .toPromise();
  }
}
