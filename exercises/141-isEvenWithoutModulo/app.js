function isEvenWithoutModulo(num) {
    // your code here
    let integer = num | 0;
    return (integer & 1) === 0;
    
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
