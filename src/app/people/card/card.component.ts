import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ImageService } from '../image.service';
import { ModalAnswerQuestionComponent } from '../../shared/modals/modal-answer-question/modal-answer-question.component';
import { Person } from '../../shared/models/person';
import { ModalDetailsComponent } from '../../shared/modals/modal-details/modal-details.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  person: Person;

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
      title: 'Qual o nome do Personagem?',
      picture: this.picture,
      person: this.person
    };
    this.bsModalRef = this.modalService.show(ModalAnswerQuestionComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';
  }

  showDetailModal() {
    this.person.seeDetails = true;
    const initialState = {
      title: 'Detalhes',
      picture: this.picture,
      person: this.person
    };

    this.bsModalRef = this.modalService.show(ModalDetailsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';
    //console.log(person)
  }

}
