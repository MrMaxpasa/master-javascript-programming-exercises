function getSmallestElementAtProperty(obj, key) {
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
  let menor = value[0];
  for (let i = 1; i < value.length; i++) {
    if (typeof value[i] === 'number' && value[i] < menor) {
      menor = value[i];
    }
  }
  return menor;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
