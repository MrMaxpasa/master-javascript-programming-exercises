function flipPairs(input) {
    // your code here
    let result = '';
  for (let i = 0; i < input.length; i += 2) {
    if (i + 1 < input.length) {
      result += input[i + 1] + input[i];
    } else {
      result += input[i];
    }
  }
  return result;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
