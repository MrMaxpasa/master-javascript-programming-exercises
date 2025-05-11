function transformEmployeeData(array) {
  // your code here
  const result = [];

  if (!Array.isArray(array)) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    const empPairs = array[i];
    const empObj = {};

    if (Array.isArray(empPairs)) {
      for (let j = 0; j < empPairs.length; j++) {
        const pair = empPairs[j];
        if (Array.isArray(pair) && pair.length === 2) {
          const key = pair[0];
          const value = pair[1];
          empObj[key] = value;
        }
      }
    }

    result.push(empObj);
  }

  return result;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);