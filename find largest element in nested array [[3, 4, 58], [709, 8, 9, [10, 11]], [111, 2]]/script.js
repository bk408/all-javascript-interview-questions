//let arr = [4, 5, 6, 2, 8, 1, 16, 0, 15, -10];
//let arr = [[3, 4, 58], [709, 8056, 9, [10, 11]], [111, 2]]

let arr = [
  [305, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
];

function findLongestWord(arr) {
  let longestNumber = -Infinity;

  function anotherFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        anotherFunc(arr[i]);
      } else {
        if (arr[i] > longestNumber) {
          longestNumber = arr[i];
        }
      }
    }
  }

  anotherFunc(arr);
  return longestNumber;
}

console.log(findLongestWord(arr));
