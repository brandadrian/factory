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
  private counter: number;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  clickButton() {
    return this.commonService.getMessage()
    .subscribe((data: Object) => this.displayResult(data));
  }

  displayResult(data: Object){
    this.result = "SudokuSolvedString:" + data["sudokuSolvedString"];
    this.origin = "SudokuToSolveString:" + data["sudokuToSolveString"];
  }
}
