function getLongestOfThreeWords(word1, word2, word3) {
    let largo = word1;

    if (word2.length > largo.length) {
        largo = word2;

    }else if (word3.length > largo.length) {
        largo = word3;

    }
    return largo;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
