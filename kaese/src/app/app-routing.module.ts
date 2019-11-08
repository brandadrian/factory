import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StravaComponent } from './strava/strava.component';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';

const routes: Routes = [
  {path: 'strava', component: StravaComponent},
  {path: 'sudokuSolver', component: SudokuSolverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
