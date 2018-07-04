import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { TimerComponent } from './timer/timer.component';
import { ModalAnswerQuestionComponent } from './modals/modal-answer-question/modal-answer-question.component';

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
    ModalAnswerQuestionComponent
  ],
  declarations: [
    PaginationComponent,
    TimerComponent,
    ModalAnswerQuestionComponent
  ],
  entryComponents: [
    ModalAnswerQuestionComponent
  ]
})
export class SharedModule { }
