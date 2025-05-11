function computeSumOfAllElements(arr) {
  // your code here
  if (!Array.isArray(arr)) {
    return 0;
  }
  // Usamos reduce con valor inicial 0, que también maneja arrays vacíos
  return arr.reduce(function(sum, num) {
    return sum + num;
  }, 0);
  
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
