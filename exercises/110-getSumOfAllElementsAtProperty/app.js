function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
  if (!obj.hasOwnProperty(key)) {
    return 0;
  }
  let value = obj[key];
  if (!Array.isArray(value) || value.length === 0) {
    return 0;
  }
  let suma = 0;
  for (let i = 0; i < value.length; i++) {
    suma += value[i];
  }
  return suma;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
