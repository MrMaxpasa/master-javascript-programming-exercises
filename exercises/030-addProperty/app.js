function addProperty(obj, key) {
  // your code here
  obj[key]=true;
  return obj;
}

let myObj = {};
console.log(addProperty(myObj, 'myProperty'));