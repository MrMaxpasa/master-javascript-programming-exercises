function getLengthOfShortestElement(arr) {
    // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let minLength = typeof arr[0] === 'string' 
    ? arr[0].length 
    : Infinity;
  
  // Recorremos el resto del array
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === 'string' && item.length < minLength) {
      minLength = item.length;
    }
  }
  
  // Si no encontramos ningún string válido, devolvemos 0
  return minLength === Infinity ? 0 : minLength;
    
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
