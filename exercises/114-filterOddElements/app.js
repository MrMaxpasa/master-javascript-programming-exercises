function filterOddElements(arr) {
  // your code here
  return arr.filter(function(num) {
    return typeof num === 'number' && num % 2 === 1;
  });
  
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
