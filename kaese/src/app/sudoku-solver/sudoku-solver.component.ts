import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sudoku-solver',
  templateUrl: './sudoku-solver.component.html',
  styleUrls: ['./sudoku-solver.component.css']
})
export class SudokuSolverComponent implements OnInit {

  message: string;
  private counter: number;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  clickButton() {
    return this.commonService.getMessage()
    .subscribe((data: Object) => this.message = "SudokuToSolveString: " + data["sudokuToSolveString"] + "SudokuSolvedString:" + data["sudokuSolvedString"]);
  }
}
