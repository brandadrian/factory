import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-sudoku-solver',
  templateUrl: './sudoku-solver.component.html',
  styleUrls: ['./sudoku-solver.component.css']
})
export class SudokuSolverComponent implements OnInit {

  public result: Array<number>;
  public input: Array<number>;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.createInput();
  }

  clickCreateArrayButton() {
    this.createInput();
  }

  clickBubbleSortButton() {
    this.result = this.solveBubbleSortArray(this.input);
  }

  solveBubbleSortArray(data: Array<number>) {

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp; 
        }
      }
    }

    return data;
  }

  createInput() {
    const length = Math.floor(Math.random() * 14) + 1;
    this.input = Array.from({length: length}, () => Math.floor(Math.random() * length));
  }
}
