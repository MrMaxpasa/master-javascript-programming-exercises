function convertScoreToGrade(score) {
    // your code here
  if (typeof score !== 'number' || score < 0 || score > 100) {
    return 'INVALID SCORE';
  }
  const decil = Math.floor(score / 10);

  switch (decil) {
    case 10:
    case 9:
      return 'A';
    case 8:
      return 'B';
    case 7:
      return 'C';
    case 6:
      return 'D';
    default:
      return 'F';
  }
    
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
