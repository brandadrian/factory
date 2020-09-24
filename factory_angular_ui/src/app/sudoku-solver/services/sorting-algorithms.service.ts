import { Injectable } from '@angular/core';
import {SortingAlgorithmResult, SortingAlgorithmResultItem} from './sorting-algorithm-result';

@Injectable({
  providedIn: 'root'
})
export class SortingAlgorithmsService {

  constructor() { }

  solveBubbleSortArray(data: Array<number>) : SortingAlgorithmResult {
    let results = new Array<SortingAlgorithmResultItem>();

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
          results.push({data: [...data], changedIndex: j});
        }
      }
    }

    return {result: results[data.length], resultSteps: results};
  }
}
