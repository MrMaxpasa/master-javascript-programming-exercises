function addFullNameProperty(obj) {
  // Add your code after this line
  return{
    ...obj,
    fullName: obj.firstName+" "+obj.lastName
  }
}
let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

addFullNameProperty(person);
console.log(person.fullName);
