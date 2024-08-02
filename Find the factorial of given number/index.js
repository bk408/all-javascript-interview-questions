// Iterative method

function iterativeFactorial(n) {
  let temp = 1;

  for (let i = 1; i <= n; i++) {
    temp = temp * i;
  }

  return temp;
}

console.log(iterativeFactorial(5));
