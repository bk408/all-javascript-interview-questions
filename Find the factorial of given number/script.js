// Recursive method

let n = 5;

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(n));

/**
 * Recursive Method
In the recursive method, n * factorial(n - 1) calls the factorial function repeatedly,
 reducing n by 1 each time, until n reaches 0. This captures the full factorial calculation, 
 which is defined as the product of all positive integers up to n.
 */
