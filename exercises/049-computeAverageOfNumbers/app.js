// Write your function here
function computeAverageOfNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    
      // Sumamos los elementos con un bucle for
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    // Dividimos la suma entre el número de elementos
    return sum / numbers.length;
}
console.log(computeAverageOfNumbers([1, 2, 3, 4, 5])); 