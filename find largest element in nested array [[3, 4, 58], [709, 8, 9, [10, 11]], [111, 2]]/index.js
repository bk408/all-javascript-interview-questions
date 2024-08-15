let arr = [
  [3, 4, 58],
  [709, 8056, 9, [10, 11]],
  [111, 2],
];

function findLongestWord(arr) {
  let tempNumber = -Infinity;

  function traverseArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverseArr(arr[i]);
      } else {
        if (arr[i] > tempNumber) {
          tempNumber = arr[i];
        }
      }
    }
  }
  traverseArr(arr);
  return tempNumber;
}

console.log(findLongestWord(arr));


