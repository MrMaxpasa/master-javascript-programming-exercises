function getAllElementsButNth(array, n) {
    // your code here
    var copia = array.slice();
    copia.splice(n, 1);
    return copia;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
