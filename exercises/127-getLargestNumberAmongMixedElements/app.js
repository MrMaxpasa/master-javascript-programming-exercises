function getLargestNumberAmongMixedElements(arr) {
    // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let largest = null;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === 'number') {
      if (largest === null || item > largest) {
        largest = item;
      }
    }
  }
  return largest === null ? 0 : largest;
    
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
