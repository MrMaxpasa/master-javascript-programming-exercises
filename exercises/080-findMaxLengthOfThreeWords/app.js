function findMaxLengthOfThreeWords(word1, word2, word3) {
  let len1 = word1.length;
  let len2 = word2.length;
  let len3 = word3.length; 

  return Math.max(len1, len2, len3);
}


let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1