function findSmallestElement(arr) {
    // your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1