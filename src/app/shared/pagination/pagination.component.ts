import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeopleResponse } from '../models/people-response';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  peopleResponse: PeopleResponse;

  @Output()
  onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPrevious() {
    this.onClick.emit( this.peopleResponse.previous );
  }

  onNext(url) {
    this.onClick.emit( url );
  }
}
