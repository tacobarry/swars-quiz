import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    PaginationComponent,
    TimerComponent
  ],
  declarations: [PaginationComponent, TimerComponent]
})
export class SharedModule { }
