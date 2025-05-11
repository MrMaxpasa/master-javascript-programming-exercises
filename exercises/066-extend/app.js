let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let key in obj2) {
    // Sólo copiamos si obj2 tiene la propiedad y obj1 NO la tiene
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
    }
    return obj1;
}
extend(obj1,obj2);

console.log(obj1);
console.log(obj2);