function getElementOfArrayProperty(obj, key, index) {
    // your code here
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  let value = obj[key];
  if (!Array.isArray(value)) {
    return undefined;
  }
  if (index < 0 || index >= value.length) {
    return undefined;
  }

  return value[index];
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
