// Write your function here
function getLastElementOfProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  const value = obj[key];
  if (!Array.isArray(value)) {
    return undefined;
  }
  if (value.length === 0) {
    return undefined;
  }
  return value[value.length - 1];
}

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5