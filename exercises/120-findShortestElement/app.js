function findShortestElement(arr) {
    // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return "";
  }
  let shortest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === 'string' && item.length < shortest.length) {
      shortest = item;
    }
  }
  return shortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'