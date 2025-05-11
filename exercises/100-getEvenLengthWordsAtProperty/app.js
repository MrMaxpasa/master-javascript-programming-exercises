function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  let value = obj[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(function(item) {
    return typeof item === 'string' && item.length % 2 === 0;
  });
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
