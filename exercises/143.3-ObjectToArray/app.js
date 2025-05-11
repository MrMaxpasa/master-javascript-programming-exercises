function convertObjectToList(obj) {
  // your code here
  const list = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      list.push([key, obj[key]]);
    }
  }

  return list;
  
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
