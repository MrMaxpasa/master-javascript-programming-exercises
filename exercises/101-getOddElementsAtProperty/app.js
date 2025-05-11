function getOddElementsAtProperty(obj, key) {
    // your code here
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  let value = obj[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(function(item) {
    return typeof item === 'number' && item % 2 === 1;
  });
    
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
