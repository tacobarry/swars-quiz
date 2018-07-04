import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Person } from '../../models/person';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  title: string;
  closeBtnName: string;
  picture: string;
  person: Person;
 
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    console.log(this.person);
  }

}
