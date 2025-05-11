function getLargestElementAtProperty(obj, key) {
    // your code here
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  let value = obj[key];
  if (!Array.isArray(value)) {
    return [];
  }
  if (value.length === 0) {
    return [];
  }
  let mayor = value[0];
  for (let i = 1; i < value.length; i++) {
    if (typeof value[i] === 'number' && value[i] > mayor) {
      mayor = value[i];
    }
  }

  return mayor;
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
