// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {
        return [];
    }
    let value = obj[key];
    if (!Array.isArray(value)) {
        return [];
    }
    return value.filter(function(item) {
        return typeof item === 'string' && item.length % 2 === 1;
    });
}

let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']