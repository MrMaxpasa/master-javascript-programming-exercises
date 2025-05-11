function isOddWithoutModulo(num) {
    // your code here
    let integer = num | 0;
    return (integer & 1) === 1;

}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
