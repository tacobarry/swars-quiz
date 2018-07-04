import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { PlayerModule } from './player/player.module';
import { PeopleModule } from './people/people.module';
import { SharedModule } from './shared/shared.module';
import { PeopleService } from './people/people.service';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HelpComponent } from './help/help.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    PlayerModule,
    PeopleModule,
    HttpClientModule,
    SharedModule,
    routing
  ],
  exports: [],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() { }
}
