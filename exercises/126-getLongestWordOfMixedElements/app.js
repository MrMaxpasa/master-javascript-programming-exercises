function getLongestWordOfMixedElements(arr) {
    // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return '';
  }
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === 'string' && item.length > longest.length) {
      longest = item;
    }
  }
  return longest;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
