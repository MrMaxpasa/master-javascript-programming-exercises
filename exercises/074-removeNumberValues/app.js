function removeNumberValues(obj) {
    // your code here
    for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];
      if (typeof val ==='number'){
        delete obj[key];
      }
    }
  }
  return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
