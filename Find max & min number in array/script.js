// Math.max -> in-built method
let arr = [2, 4, 6, 9, 12, 1, 17];

function maxVal(arr) {
  return Math.max(...arr);
}

console.log(maxVal(arr));

// Reduce method

let findMaxValue = arr.reduce((accumulator, commutator) => {
  return Math.max(accumulator, commutator);
}, arr[0]);

console.log(findMaxValue);

// for loop
let arr2 = [2, 4, 6, 9, 12, 1, 17, 20];
let maxNumber = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > maxNumber) {
    maxNumber = arr2[i];
  }
}

console.log(maxNumber);
