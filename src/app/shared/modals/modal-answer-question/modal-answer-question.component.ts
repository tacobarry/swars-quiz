import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Person } from '../../models/person';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-answer-question',
  templateUrl: './modal-answer-question.component.html',
  styleUrls: ['./modal-answer-question.component.css']
})
export class ModalAnswerQuestionComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
  person: Person;
  name: string;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    console.log(this.person, 'PROFIT!!!')
    this.list.push('PROFIT!!!');
  }
}
