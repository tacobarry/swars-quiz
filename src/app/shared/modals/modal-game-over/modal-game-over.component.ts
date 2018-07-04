import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ScoreService } from '../../sevices/score.service';

@Component({
  selector: 'app-modal-game-over',
  templateUrl: './modal-game-over.component.html',
  styleUrls: ['./modal-game-over.component.css']
})
export class ModalGameOverComponent implements OnInit {

  title: string;
  closeBtnName: string;
  player: any = {
    name: '',
    email: '',
    points: 0
  }

  constructor(
    public bsModalRef: BsModalRef,
    private scoreService: ScoreService
  ) {
    this.player = {
      name: '',
      email: '',
      points: 0
    };
  }

  ngOnInit() {
    this.player.points = ScoreService.amountPoints;
  }

  onSave() {
    window.localStorage.setItem('scores', this.player);
  }

}
