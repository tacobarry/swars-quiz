import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  previousPage: string;
  nextPage: string;

  constructor() { }

  ngOnInit() {
    this.previousPage = '';
  }

}
