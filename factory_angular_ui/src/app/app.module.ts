import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatTableModule, MatTabsModule, MatInputModule } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StravaComponent } from './strava/strava.component';
import { SudokuSolverComponent } from './sudoku-solver/sudoku-solver.component';
import { ZhawComponent } from './zhaw/zhaw.component';
import { NextConnectionsComponent } from './next-connections/next-connections.component';
import { FootballStatsComponent } from './football-stats/football-stats.component';
import { HomeAutomationComponent } from './home-automation/home-automation.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    StravaComponent,
    SudokuSolverComponent,
    ZhawComponent,
    NextConnectionsComponent,
    FootballStatsComponent,
    HomeAutomationComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
