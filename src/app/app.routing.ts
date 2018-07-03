import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { QuizComponent } from './quiz/quiz.component';
import { PeopleComponent } from './people/people.component';
import { PlayerComponent } from './player/player.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
    { path: '', component: QuizComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'player', component: PlayerComponent },
    { path: 'help', component: HelpComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);