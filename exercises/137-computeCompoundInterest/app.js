function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  const amount = principal * Math.pow(
    1 + interestRate / compoundingFrequency,
    compoundingFrequency * timeInYears
  );

  // El interés generado es el monto menos el capital inicial
  return amount - principal;
  
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
