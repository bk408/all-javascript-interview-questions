let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 3, 5, 7, 9];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// Insertion sort method

function insertionSort() {
  for (let i = 1; i < mergedArray.length; i++) {
    let currentVal = mergedArray[i];
    let j = i - 1;

    while (j >= 0 && mergedArray[j] > currentVal) {
      mergedArray[j + 1] = mergedArray[j];
      j--;
    }
    mergedArray[j + 1] = currentVal;
  }
  return mergedArray;
}

console.log(insertionSort(mergedArray));
