// Write your function here
function countAllCharacters(str) {
  let resultado = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (resultado.hasOwnProperty(char)) {
      resultado[char]++;
    } else {
      resultado[char] = 1;
    }
  }
  
  return resultado;
}


let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}