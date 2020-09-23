import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-sudoku-solver',
  templateUrl: './sudoku-solver.component.html',
  styleUrls: ['./sudoku-solver.component.css']
})
export class SudokuSolverComponent implements OnInit {

  public result: Array<any>;
  public input: Array<number>;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.createInput();
  }

  clickCreateArrayButton() {
    this.createInput();
  }

  clickBubbleSortButton() {
    let results = this.solveBubbleSortArray(this.input);
    this.displayResult(results);
  }

  solveBubbleSortArray(data: Array<number>) {
    let results = new Array<any>();

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
          let dataCopy = [...data];
          results.push({dataCopy, j})
        }
      }
    }

    return results;
  }

  displayResult(results: Array<any>) {

    results.forEach((result, i) => {
      setTimeout(() => {
        this.result = result.dataCopy;
      }, i * 10);
    });
  }

  createInput() {
    const length = 20;//Math.floor(Math.random() * 20) + 1;
    this.input = Array.from({length: length}, () => Math.floor(Math.random() * length));
    this.result = this.input;
  }
}
