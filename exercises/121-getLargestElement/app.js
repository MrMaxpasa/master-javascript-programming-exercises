function getLargestElement(arr) {
  // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  // Partimos asumiendo que el primer elemento es el mayor
  let mayor = arr[0];

  // Recorremos el resto del array para encontrar un valor mayor
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] > mayor) {
      mayor = arr[i];
    }
  }

  return mayor;
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;