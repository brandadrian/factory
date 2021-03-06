import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FootballStatsComponent } from './football-stats/football-stats.component';
import { HomeAutomationComponent } from './home-automation/home-automation.component';
import { InfoComponent } from './info/info.component';
import { NextConnectionsComponent } from './next-connections/next-connections.component';
import { StravaComponent } from './strava/strava.component';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { ZhawComponent } from './zhaw/zhaw.component';

const routes: Routes = [
  {path: 'strava', component: StravaComponent},
  {path: 'sudokuSolver', component: SudokuSolverComponent},
  {path: 'zhaw', component: ZhawComponent},
  {path: 'next-connections', component: NextConnectionsComponent},
  {path: 'football-stats', component: FootballStatsComponent},
  {path: 'home-automation', component: HomeAutomationComponent},
  {path: 'info', component: InfoComponent},
  {path: '', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
