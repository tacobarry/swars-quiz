import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Person } from '../../shared/models/person';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  person: any;

  private picture: string;

  constructor() { }

  ngOnInit() {
    this.picture = `/assets/images/people/${
      ImageService.getImageByName(this.person.name)
    }`.trim();
  }

  answerQuestion() {
    
  }

  showDetailModal(person) {

  }

}
