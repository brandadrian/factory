import { Component, OnInit } from '@angular/core';
import { SortingAlgorithmResultItem } from './services/sorting-algorithm-result';

import { SortingAlgorithmsService } from './services/sorting-algorithms.service';

@Component({
  selector: 'app-sudoku-solver',
  templateUrl: './sudoku-solver.component.html',
  styleUrls: ['./sudoku-solver.component.css']
})
export class SudokuSolverComponent implements OnInit {

  public result: Array<number>;
  public chartResult: Array<number>;
  public input: Array<number>;

  constructor(private sortingAlgorithmsService: SortingAlgorithmsService) { }

  ngOnInit() {
    this.createInput();
  }

  clickCreateArrayButton() {
    this.createInput();
  }

  clickBubbleSortButton() {
    let result = this.sortingAlgorithmsService.solveBubbleSortArray(this.input);
    this.result = result.result.data;
    this.displayResult(result.resultSteps);
  }

  displayResult(results: Array<SortingAlgorithmResultItem>) {

    results.forEach((result, i) => {
      setTimeout(() => {
        this.chartResult = result.data;
      }, i * 10);
    });
  }

  createInput() {
    const length = 20;//Math.floor(Math.random() * 20) + 1;
    const min = 1
    const max = 100
    
    this.input = Array.from({length: length}, () => Math.floor(Math.random() * (max - min + 1) + min));
    this.result = this.input;
    this.chartResult = this.input;
  }
}
