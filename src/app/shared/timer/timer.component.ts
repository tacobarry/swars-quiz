import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalGameOverComponent } from '../modals/modal-game-over/modal-game-over.component';

const fiveSeconds: number = 5000;
const twoMinutes: number = fiveSeconds * 24;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  timer;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    window.clearTimeout(this.timer);
    this.timer = setTimeout(() => { this.showGameOverModal(); }, twoMinutes);
  }

  showGameOverModal() {
    console.log('Time is over!');
    const initialState = {
      title: 'Quiz Finalizado!'
    };
    this.bsModalRef = this.modalService.show(ModalGameOverComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';
  }

  ngOnDestroy() {
    window.clearTimeout(this.timer);
  }
}
