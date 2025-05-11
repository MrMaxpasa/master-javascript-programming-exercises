// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {
        return [];
    }
    const value = obj[key];
    if (!Array.isArray(value)) {
        return [];
    }
    return value.filter(function(item) {
        return typeof item === 'number' && item < 100;
    });
}


let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]