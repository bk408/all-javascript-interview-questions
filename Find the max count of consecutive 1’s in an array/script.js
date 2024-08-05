let arr = [4, 1, 1, 6, 4, 1, 7, 1, 1, 1];
let maxCount = 0; // To store max number of consecutive 1s streak
let count = 0; // count the current streak

function FindMaxCountValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++; // Increment count for consecutive 1s
      if (count > maxCount) {
        maxCount = count; // update max count if count is greater
      }
    } else {
      count = 0; // Reset count if found 0
    }
  }

  return maxCount; // return maxCount of consecutive 1s found
}

console.log(FindMaxCountValue(arr));


/**
 * let maxCount = 0 :- maxCount is used to keep track of the highest number of consecutive 1s found at any point during the iteration.
 * let count = 0 :- count is used to count the current sequence of consecutive 1s as you iterate through the array.
 */
