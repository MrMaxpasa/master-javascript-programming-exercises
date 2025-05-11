// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {
        return [];
    }
  let value = obj[key];
    if (!Array.isArray(value)) {
        return [];
    }
    return value.filter(function(item) {
        return typeof item === 'number' && item > 10;
    });
}



let obj = {
  key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]