import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    PeopleComponent
  ],
  declarations: [
    PeopleComponent
  ]
})
export class PeopleModule { }
