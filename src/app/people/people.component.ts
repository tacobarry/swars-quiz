import { Component, OnInit, Output } from '@angular/core';

import { PeopleService } from './people.service';
import { PeopleResponse } from '../shared/models/people-response';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  private people: any[];

  private peopleResponse: PeopleResponse;

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.peopleService.getPeople()
      .then((res) => {
        this.people = res['results'];

        this.peopleResponse = res;
        console.log(this.peopleResponse)

      })
      .catch((err) => {
        console.log(err)
        this.people = [];
      });
  }

}
