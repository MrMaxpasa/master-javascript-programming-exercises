function fromListToObject(array) {
  // your code here
  const result = {};
  if (!Array.isArray(array)) {
      return result;
  }
  for (let i = 0; i < array.length; i++) {
    const pair =  array[i];
    if (Array.isArray(pair) && pair.length === 2) {
      const key = pair[0];
      const value = pair[1];
      result[key] = value;
    }
  }
  return result;

}


let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
