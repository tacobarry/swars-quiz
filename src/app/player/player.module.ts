import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PlayerComponent
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule { }
