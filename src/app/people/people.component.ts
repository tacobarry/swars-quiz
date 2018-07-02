import { Component, OnInit, Output } from '@angular/core';

import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Output()
  private people: any[];

  @Output()
  private next:string;

  @Output()
  private previous: string;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople()
      .then((res) => {
        this.people = res['results'];
        this.next = res['next'];
        this.previous = res['previous'];

        console.log(this.people)
      })
      .catch((err) => {
        console.log(err)
        this.people = [];
      });
  }

}
