let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 3, 5, 7, 9];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// Selection sort method
function sortMergedArr() {
  for (let i = 0; i < mergedArray.length - 1; i++) {
    let minIndexValue = i;

    for (let j = i + 1; j < mergedArray.length; j++) {
      // Check the condition if current index is smaller than to smallest value of the array
      if (mergedArray[j] < mergedArray[minIndexValue]) {
        minIndexValue = j; // if the value is small then we will update minIndexValue to j
      }
    }

    // swapping the min value to the first element
    let temp = mergedArray[minIndexValue];
    mergedArray[minIndexValue] = mergedArray[i];
    mergedArray[i] = temp;
  }
  return mergedArray;
}

console.log(sortMergedArr(mergedArray));
