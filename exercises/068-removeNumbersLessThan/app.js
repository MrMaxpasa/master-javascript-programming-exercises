let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let val = obj[key];
            if (typeof val === 'number' && val < num) {
                delete obj[key];
            }
        }
    }
    return obj;
}

removeNumbersLessThan(5, obj);
console.log(obj);