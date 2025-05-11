function modulo(num1, num2) {
    // your code here
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  if (num1 === 0) {
    return 0;
  }

  if (num2 === 0) {
    return NaN;
  }

  const cociente = num1 / num2;
  const parteEntera = cociente < 0
    ? Math.ceil(cociente)
    : Math.floor(cociente);
  return num1 - parteEntera * num2;
  
}

let output = modulo(25, 4);
console.log(output); // --> 1
