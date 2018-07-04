import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ImageService } from '../image.service';
import { ModalAnswerQuestionComponent } from '../../shared/modals/modal-answer-question/modal-answer-question.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  person: any;

  private picture: string;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.picture = `/assets/images/people/${
      ImageService.getImageByName(this.person.name)
    }`.trim();
  }

  answerQuestion() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component',
      person: this.person
    };
    this.bsModalRef = this.modalService.show(ModalAnswerQuestionComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  showDetailModal() {
    //console.log(person)
  }

}
