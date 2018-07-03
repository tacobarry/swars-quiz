import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    PaginationComponent
  ],
  declarations: [PaginationComponent]
})
export class SharedModule { }
