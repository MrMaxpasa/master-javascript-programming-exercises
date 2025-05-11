function findShortestWordAmongMixedElements(arr) {
    // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return "";
  }
  
  let shortest = null;
  
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (typeof item === "string") {
        if (shortest === null) {
            shortest = item;
      }
      else if (item.length < shortest.length) {
        shortest = item;
      }
    }
  }
  return shortest === null ? "" : shortest;
  
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
