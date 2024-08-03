

// for loop

function fibonacciNumber(n) {
    let n1 = 0
    let n2 = 1
    let fibonacciValue;

    if (n <= 0) return 0
    if(n === 1) return 1

    for (let i = 2; i <= n; i++){
        fibonacciValue = n1 + n2;  // compute f(i) = f(i-1) + f(i - 2)
        n1 = n2;                  // update f(i - 2) to f(i - 1)
        n2 = fibonacciValue;     // update f(i - 1) to f(i)
    }
    return fibonacciValue        // return f(n)
  }


  console.log(fibonacciNumber(8));


  function fibNum(n) {
    let nu1 = 0;
    let nu2 = 1;
    let finalVal;

    if (n <= 0) return 0;
    if (n === 1) return 1;

    for (let i = 2; i <= n; i++) {
      finalVal = nu1 + nu2;
      nu1 = nu2;
      nu2 = finalVal;
    }
    return finalVal;
  }

  console.log(fibNum(5));
  console.log(fibNum(8));
  