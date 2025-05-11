function computeProductOfAllElements(arr) {
  // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let producto = 1;
  for (let i = 0; i < arr.length; i++) {
    producto *= arr[i];
  }
  return producto;
  
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
