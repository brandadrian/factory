import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StravaComponent } from './strava/strava.component';

const routes: Routes = [
  {path: 'strava', component: StravaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
