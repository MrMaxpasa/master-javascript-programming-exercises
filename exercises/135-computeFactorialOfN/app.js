function computeFactorialOfN(n) {
    // your code here
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    return 0;
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
    
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
