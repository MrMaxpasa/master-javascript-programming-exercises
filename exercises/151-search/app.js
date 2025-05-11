function search(array, value) {
  // your code here
  var low = 0;
  var high = array.length - 1;
  var mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
  
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
