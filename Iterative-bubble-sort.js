function bubbleSort(arr) {
    let currIndexToCheck = 0;
    let arraySorted = false;
    let countOfIndicesSorted = 0;

while (!arraySorted) {
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < arr[currIndexToCheck]) {
            let numToSwitch;
            numToSwitch = arr[currIndexToCheck];
            arr[currIndexToCheck] = arr[i];
            arr[i] = numToSwitch;
            ++countOfIndicesSorted;
        }
    
        ++currIndexToCheck;
    }

    currIndexToCheck = 0;
    
    if (countOfIndicesSorted === 0) {
      arraySorted = true;
    }
    
    countOfIndicesSorted = 0;
    
  }
  return arr;
}


