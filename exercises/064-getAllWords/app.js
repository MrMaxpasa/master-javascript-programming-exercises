function getAllWords(str) {
    // your code here
    return str.split(/\s+/);
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
