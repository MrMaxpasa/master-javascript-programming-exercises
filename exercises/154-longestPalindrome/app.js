function findLongestPalindrome(sentence) {
  let longest = '';
  for (let i = 0; i < sentence.length; i++) {
    for (let j = i; j < sentence.length; j++) {
      const substr = sentence.slice(i, j + 1);
      if (isPalindrome(substr) && substr.length >= longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

function reverseString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

function isPalindrome(word) {
  const normalized = word.toLowerCase();
  return normalized === reverseString(normalized);
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"

