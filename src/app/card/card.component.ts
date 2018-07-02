import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  person: any;

  @Output()
  answare:string;

  constructor() { }

  ngOnInit() {
  }

  answerQuestion() {
    
  }

  showDetailModal(person) {

  }

}
