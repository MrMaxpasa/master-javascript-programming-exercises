function getLongestElement(arr) {
    // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return "";
  }
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    // Comparamos longitudes y actualizamos si encontramos uno más largo
    if (typeof item === 'string' && item.length > longest.length) {
      longest = item;
    }
  }
  return longest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
