import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    SharedModule,
    ModalModule.forRoot()
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
