function computeSummationToN(n) {
  // your code here
  if (typeof n !== 'number' || n <= 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

