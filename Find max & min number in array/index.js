// Min value find

let arr = [2, 4, 6, 9, 12, 1, 17];

function findMinArr() {
  return Math.min(...arr);
}

console.log(findMinArr());

// reduce method

const findMinValue = arr.reduce((accumulator, currentValue) => {
  return Math.min(accumulator, currentValue);
});

console.log(findMinValue);

// for loop

let minVal = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minVal) {
    minVal = arr[i];
  }
}

console.log(minVal);
