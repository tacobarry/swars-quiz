import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  person: any;

  constructor() { }

  ngOnInit() {
  }

  answerQuestion() {
    
  }

  showDetailModal(person) {

  }

}
