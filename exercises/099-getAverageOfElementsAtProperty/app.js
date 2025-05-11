function getAverageOfElementsAtProperty(obj, key) {
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
  return suma / value.length;
}
let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  