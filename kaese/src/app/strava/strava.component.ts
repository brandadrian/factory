import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strava',
  templateUrl: './strava.component.html',
  styleUrls: ['./strava.component.css']
})
export class StravaComponent implements OnInit {

  counter: number;

  constructor() { 
    this.counter = 0;
  }

  ngOnInit() {
  }

  countButton() {
    this.counter += 1;
  }
}