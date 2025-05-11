function isIsogram(text) {
  // your code here
  const lower = text.toLowerCase();
  const seen = {};
  for (let i = 0; i < lower.length; i++) {
    const char = lower[i];
    if (seen[char]) {
      return false;
    }
    seen[char] = true;
  }

  return true;
  
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
