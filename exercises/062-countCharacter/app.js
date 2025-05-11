function countCharacter(str, char) {
    // your code here
    let contador=0;

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === char){
            contador++;
        }
    }
    
    return contador;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
