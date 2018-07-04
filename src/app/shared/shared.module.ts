import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { TimerComponent } from './timer/timer.component';
import { ModalAnswerQuestionComponent } from './modals/modal-answer-question/modal-answer-question.component';
import { ScoreService } from './sevices/score.service';
import { ModalDetailsComponent } from './modals/modal-details/modal-details.component';
import { ModalGameOverComponent } from './modals/modal-game-over/modal-game-over.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    PaginationComponent,
    TimerComponent,
    ModalAnswerQuestionComponent,
    ModalDetailsComponent,
    ModalGameOverComponent
  ],
  declarations: [
    PaginationComponent,
    TimerComponent,
    ModalAnswerQuestionComponent,
    ModalDetailsComponent,
    ModalGameOverComponent
  ],
  entryComponents: [
    ModalAnswerQuestionComponent,
    ModalDetailsComponent,
    ModalGameOverComponent
  ],
  providers: [
    ScoreService
  ]
})
export class SharedModule { }
