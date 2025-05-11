function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
  if (typeof score !== 'number' || score < 0 || score > 100) {
    return 'INVALID SCORE';
  }

  // Determinar letra base usando switch
  let grade;
  const decil = Math.floor(score / 10);

  switch (decil) {
    case 10:
    case 9:
      grade = 'A';
      break;
    case 8:
      grade = 'B';
      break;
    case 7:
      grade = 'C';
      break;
    case 6:
      grade = 'D';
      break;
    default:
      return 'F'; 
  }

  if (score === 100) {
    return 'A+';
  }


  const resto = score % 10;
  switch (true) {
    case (resto >= 8):
      return grade + '+';
    case (resto <= 2):
      return grade + '-';
    default:
      return grade;
  }
    
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
