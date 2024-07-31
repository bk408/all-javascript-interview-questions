// Insertion Algorithm

let arr = [4, 5, 7, 3, 8, 1, 2, 9];

function insertionSort() {
  // outer loop
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Inner Loop

    // Moving elements of arr[0..i-1], that are greater than key, to one position ahead

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log("Before sorting: ", arr);
console.log("After sorting: ", insertionSort(arr));
