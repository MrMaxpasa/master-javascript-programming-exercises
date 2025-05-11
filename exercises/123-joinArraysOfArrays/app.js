function joinArrayOfArrays(arr) {
  // your code here
  return arr.reduce(function(acumulador, arrayActual) {
    return acumulador.concat(arrayActual);
  }, []);
  
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
