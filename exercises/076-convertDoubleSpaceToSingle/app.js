function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.replace(/ {2,}/g, ' ');
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
