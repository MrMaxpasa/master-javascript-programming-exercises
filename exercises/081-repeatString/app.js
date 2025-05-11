function repeatString(string, num) {
    // your code here
    let result='';
    for(let i = 0; i < num; i++){
        result +=string;
    }
    return result;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
