function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let largo = word1;

    if (word2.length < largo.length) {
        largo = word2;

    }else if (word3.length < largo.length) {
        largo = word3;

    }
    return largo;
    
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
