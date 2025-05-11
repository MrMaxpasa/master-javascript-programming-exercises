function sumDigits(num) {
    // your code here
  const str = num.toString();
  let sum = 0;
  let sign = 1;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '-') {
      sign = -1;
    } else {
      sum += sign * Number(char);
      sign = 1;
    }
  }

  return sum;
    
}

let output = sumDigits(-316);
console.log(output); // --> 4
