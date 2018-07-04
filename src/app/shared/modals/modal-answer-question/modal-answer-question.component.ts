import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Person } from '../../models/person';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ScoreService } from '../../sevices/score.service';

@Component({
  selector: 'app-modal-answer-question',
  templateUrl: './modal-answer-question.component.html',
  styleUrls: ['./modal-answer-question.component.css']
})
export class ModalAnswerQuestionComponent implements OnInit, OnDestroy {

  title: string;
  closeBtnName: string;
  answare: string = '';
  picture: string;
  person: Person;

  @Output()
  onAnswared = new EventEmitter();
 
  constructor(
    public bsModalRef: BsModalRef,
    private scoreService: ScoreService
  ) {}
 
  ngOnInit() {
    console.log('Amount', ScoreService.amountPoints);
    // console.log(this.person, 'PROFIT!!!')
    // this.list.push('PROFIT!!!');
  }

  answareQuestion(event, name) {
    console.log('data', name);
    this.answare = name;
    this.onAnswared.emit( this.answare )
    this.scoreService.answareQuestion(this.answare, this.person);
  }

  ngOnDestroy() {
    this.onAnswared.emit( this.answare )
    console.log('answare::::', this.answare);
  }
}
