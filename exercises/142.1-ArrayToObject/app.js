function transformFirstAndLast(array) {
  // your code here
    const result = {};
    if (!Array.isArray(array) || array.length === 0) {
        return result;
    }
    result[array[0]] = array[array.length - 1];
    return result;
  
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
