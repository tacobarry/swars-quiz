import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Person } from '../../models/person';
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
 
  constructor(
    public bsModalRef: BsModalRef,
    private scoreService: ScoreService
  ) {}
 
  ngOnInit() {
  }

  answareQuestion(event, name) {
    this.answare = name;
    this.scoreService.answareQuestion(this.answare, this.person);
  }

  ngOnDestroy() {
  }
}
