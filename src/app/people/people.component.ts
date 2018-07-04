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
  private people1: any[];
  private people2: any[];

  private paginationSize: 10;

  private peopleResponse: PeopleResponse;
  private result: Promise<PeopleResponse>;

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.changePage(true);
  }

  changePage(url) {
    if (!!url) {
      this.people1 = [];
      this.people2 = [];
      if (!this.peopleResponse) {
        this.result = this.peopleService.getPeopleFirstTime()
      } else {
        this.result = this.peopleService.getPeoplePaginated(url)
      }
      this.result.then((res) => {
          this.people = res['results'];
  
          for (let i=0; i < this.people.length; i++) {
            if (i < 5) {
              this.people1.push(this.people[i]);
            } else {
              this.people2.push(this.people[i]);
            }
          }
          this.peopleResponse = res;
  
        })
        .catch((err) => {
          console.log(err)
          this.people = [];
        });
    }
  }
}
