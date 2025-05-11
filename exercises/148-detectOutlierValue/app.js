function detectOutlierValue(string) {
    // your code here
  const nums = string.split(' ').map(Number);
  const parities = nums.slice(0, 3).map(n => n % 2 === 0);
  const majorityIsEven = parities.filter(Boolean).length > 1;
  for (let i = 0; i < nums.length; i++) {
    const isEven = nums[i] % 2 === 0;
    if (isEven !== majorityIsEven) {
      return i + 1;
    }
  }
  return -1;
    
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
