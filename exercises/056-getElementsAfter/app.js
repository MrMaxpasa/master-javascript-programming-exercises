function getElementsAfter(array, n) {
  // your code here
  let array2 = array.slice(n+1);
  return array2;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
