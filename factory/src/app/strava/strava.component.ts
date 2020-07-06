import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-strava',
  templateUrl: './strava.component.html',
  styleUrls: ['./strava.component.css']
})
export class StravaComponent implements OnInit {

  message: string;
  private counter: number;

  constructor(private commonService: CommonService) { 
    this.counter = 0;
  }

  ngOnInit() {
  }

  clickButton() {
    return this.commonService.getMessage()
    .subscribe((data: Object) => this.message = "SudokuToSolveString: " + data["sudokuToSolveString"] + "SudokuSolvedString:" + data["sudokuSolvedString"]);
  }
}