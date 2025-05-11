// Write your function here
function getIndexOf(letra,str){
    for(let i = 0; i < str.length; i++ ){
        if(letra === str[i]){
            return i;
        }
    }
    return -1
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2