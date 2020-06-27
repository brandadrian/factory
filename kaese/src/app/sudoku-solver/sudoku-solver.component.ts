import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-sudoku-solver',
  templateUrl: './sudoku-solver.component.html',
  styleUrls: ['./sudoku-solver.component.css']
})
export class SudokuSolverComponent implements OnInit {

  dataObject: Object;
  result: string;
  origin: string;
  resultMatrix: Object;
  originMatrix: Object;

  private counter: number;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  clickButton() {
    return this.commonService.getMessage()
    .subscribe((data: Object) => this.displayResult(data));
  }

  getPythonServerStatusClick() {
    return this.commonService.getPythonServerStatus()
    .subscribe((data: Object) => this.result = data['message']);
  }

  displayResult(data: Object){
    this.result = "SudokuSolvedString:" + data["sudokuSolvedString"];
    this.origin = "SudokuToSolveString:" + data["sudokuToSolveString"];
    this.resultMatrix = data["sudokuSolved"];
    this.originMatrix = data["sudokuToSolve"];
  }
}
