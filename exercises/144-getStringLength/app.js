function getStringLength(string) {
    // your code here
  let count = 0;
  while (string.slice(count, count + 1) !== '') {
    count++;
  }
  return count;
    
}

let output = getStringLength('hello');
console.log(output); // --> 5
