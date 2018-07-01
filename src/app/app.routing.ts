import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { QuizComponent } from './quiz/quiz.component';
import { PeopleComponent } from './people/people.component';
import { PlayerComponent } from './player/player.component';

const APP_ROUTES: Routes = [
    { path: '', component: QuizComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'player', component: PlayerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);