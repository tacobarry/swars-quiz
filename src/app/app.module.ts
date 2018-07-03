import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { routing } from './app.routing';
import { PlayerModule } from './player/player.module';
import { PeopleModule } from './people/people.module';
import { PaginationComponent } from './pagination/pagination.component';
import { CardComponent } from './card/card.component';
import { PeopleService } from './people/people.service'
import { HttpClientModule } from '@angular/common/http';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    PaginationComponent,
    CardComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    PlayerModule,
    PeopleModule,
    HttpClientModule,
    routing
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
