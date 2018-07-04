import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Person } from '../../models/person';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-answer-question',
  template: `
    <p>
    modal-answer-question works!
    </p>
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `,
  // templateUrl: './modal-answer-question.component.html',
  styleUrls: ['./modal-answer-question.component.css']
})
export class ModalAnswerQuestionComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
  person: Person;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    console.log(this.list, 'PROFIT!!!')
    this.list.push('PROFIT!!!');
  }
}
