function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let smallest = null;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === 'number') {
      if (smallest === null || item < smallest) {
        smallest = item;
      }
    }
  }
  return smallest === null ? 0 : smallest;
  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
