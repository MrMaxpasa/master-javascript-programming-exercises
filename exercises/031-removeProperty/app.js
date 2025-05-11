function removeProperty(obj, key) {
  // your code here
  delete obj[key];
}

let obj = {
  name: 'Sam',
  age: 20
}

console.log(removeProperty(obj,'name'));