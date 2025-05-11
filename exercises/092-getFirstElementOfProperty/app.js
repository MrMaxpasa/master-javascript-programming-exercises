// Write your function here
function getFirstElementOfProperty(obj, key) {
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
  return value[0];
}


let obj = {
  key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1