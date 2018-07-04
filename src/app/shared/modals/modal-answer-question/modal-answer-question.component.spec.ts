import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnswerQuestionComponent } from './modal-answer-question.component';

describe('ModalAnswerQuestionComponent', () => {
  let component: ModalAnswerQuestionComponent;
  let fixture: ComponentFixture<ModalAnswerQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnswerQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
