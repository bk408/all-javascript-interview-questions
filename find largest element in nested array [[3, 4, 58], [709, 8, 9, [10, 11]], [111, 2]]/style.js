// using Array.prototype.flat
let arr = [
  [3, 4, 58],
  [709, 8056, 9, [10, 11]],
  [111, 2],
];

function findLongestWord(arr) {
  let flatteredArr = arr.flat(Infinity);

  return Math.max(...flatteredArr);
}

console.log(findLongestWord(arr));
