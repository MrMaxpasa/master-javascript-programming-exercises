// Write your function here
function areValidCredentials(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }else if (username.length <= 3) {
    return false;
  }else if (password.length < 8) {
    return false;
  }else{
  return true;
  }
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); 