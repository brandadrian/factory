import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StravaComponent } from './strava/strava.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { ZhawComponent } from './zhaw/zhaw.component';
import { NextConnectionsComponent } from './next-connections/next-connections.component';
import { FootballStatsComponent } from './football-stats/football-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StravaComponent,
    SudokuSolverComponent,
    ZhawComponent,
    NextConnectionsComponent,
    FootballStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
