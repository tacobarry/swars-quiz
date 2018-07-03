import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    PeopleComponent,
    CardComponent
  ],
  declarations: [
    PeopleComponent,
    CardComponent
  ]
})
export class PeopleModule { }
