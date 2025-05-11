// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  const value = obj[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(function(item) {
    return item === 10;
  });
}


let obj = {
  key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]