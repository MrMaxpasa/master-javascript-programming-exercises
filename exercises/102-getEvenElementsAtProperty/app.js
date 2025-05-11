function getEvenElementsAtProperty(obj, key) {
    // your code here
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  let value = obj[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(function(item) {
    return typeof item === 'number' && item % 2 === 0;
  });
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
