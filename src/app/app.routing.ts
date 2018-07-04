import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { QuizComponent } from './quiz/quiz.component';
import { PeopleComponent } from './people/people.component';
import { PlayerComponent } from './player/player.component';
import { HelpComponent } from './help/help.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
    { path: '', component: QuizComponent },
    { path: 'player', component: PlayerComponent },
    { path: 'help', component: HelpComponent },
    { path: 'game', component: GameComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);