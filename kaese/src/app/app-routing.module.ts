import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StravaComponent } from './strava/strava.component';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { ZhawComponent } from './zhaw/zhaw.component';

const routes: Routes = [
  {path: 'strava', component: StravaComponent},
  {path: 'sudokuSolver', component: SudokuSolverComponent},
  {path: 'zhaw', component: ZhawComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
