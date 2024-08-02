let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 3, 5, 7, 9];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// sort In-built method
/*let sortMergedArry = mergedArray.sort((a, b) => a - b);

console.log(sortMergedArry); */

// bubble sort

function sortMergedArr() {
  for (let i = 0; i < mergedArray.length - 1; i++) {
    let swappedValue = false;

    for (let j = 0; j < mergedArray.length - i - 1; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        let temp = mergedArray[j];
        mergedArray[j] = mergedArray[j + 1];
        mergedArray[j + 1] = temp;

        swappedValue = true;
      }
    }
    if (!swappedValue) break;
  }
  return mergedArray;
}

console.log(sortMergedArr(mergedArray));
