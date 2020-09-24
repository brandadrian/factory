export interface SortingAlgorithmResultItem {
    data: Array<number>;
    changedIndex: number;
  }

  export interface SortingAlgorithmResult {
    resultSteps: Array<SortingAlgorithmResultItem>;
    result: SortingAlgorithmResultItem;
  }