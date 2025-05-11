function isRotated(str1, str2) {
    // your code here
  if (str1.length !== str2.length) {
    return false;
  }

  // Concatenamos str1 consigo misma y comprobamos si str2 está dentro
  return (str1 + str1).includes(str2);
    
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
