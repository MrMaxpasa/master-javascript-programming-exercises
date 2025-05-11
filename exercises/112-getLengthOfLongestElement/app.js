function getLengthOfLongestElement(arr) {
    // Your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (typeof item === 'string' && item.length > maxLength) {
      maxLength = item.length;
    }
  }
  return maxLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
