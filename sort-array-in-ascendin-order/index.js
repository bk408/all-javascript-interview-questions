// Selection algorithm to solve the problem

let arr = [4, 5, 7, 3, 8, 1, 2, 9];

function selectionSort() {
  // outer loop
  for (let i = 0; i < arr.length; i++) {
    //Set the min Index value in the outer loop
    let minIndexVal = i;
    // Inner loop

    for (let j = i + 1; j < arr.length; j++) {
      // condition check current index is smaller than to smallest index value or not

      if (arr[j] < arr[minIndexVal]) {
        // If the value is small then update the min value to j
        minIndexVal = j;
      }
    }

    // swapping the min value with the first element
    let temp = arr[minIndexVal];
    arr[minIndexVal] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log("Before sorting: ", arr);
console.log("After sorting: ", selectionSort(arr));
