function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
  if (!obj.hasOwnProperty(key)) {
    return 0;
  }
  let value = obj[key];
  if (!Array.isArray(value)) {
    return 0;
  }
  if (value.length === 0) {
    return 0;
  }
  let producto = 1;
  for (let i = 0; i < value.length; i++) {
    producto *= value[i];
  }

  return producto;
    
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
