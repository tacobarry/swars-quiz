import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  
  @Output()
  timeout = new EventEmitter();

  timer;

  fiveSeconds: number = 5000;
  twoMinutes: number = this.fiveSeconds * 24;

  constructor() { }

  ngOnInit() {
    window.clearTimeout(this.timer);
    this.timer = setTimeout(this.finishedTimer, this.twoMinutes);
  }

  finishedTimer(event) {
    console.log('time over!');
    // this.timeout.emit( event );
  }

  ngOnDestroy() {
    window.clearTimeout(this.timer);
  }
}
