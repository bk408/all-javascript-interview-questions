

// Recursion Method

function findFibonacciNumber(num) {
    if(num <= 0) return 0
    if (num === 1) return 1
    return findFibonacciNumber(num - 1) + findFibonacciNumber(num - 2)
}

console.log(findFibonacciNumber(5));
console.log(findFibonacciNumber(8));
