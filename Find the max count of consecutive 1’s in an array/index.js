

// consecutive 4s count

let arr = [4, 1, 4, 6, 4, 4, 4, 4, 4, 4];

let maxCount = 0;
let count = 0;

function FindMaxCountValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(FindMaxCountValue(arr));
