// Write your function here
function getNthElementOfProperty(obj, key, n) {
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  let value = obj[key];
  if (!Array.isArray(value)) {
    return undefined;
  }
  if ((typeof n !== 'number') || (n < 0) || (n >= value.length)) {
    return undefined;
  }
  return value[n];
}

let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2