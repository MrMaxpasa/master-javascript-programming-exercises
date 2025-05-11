function multiply(num1, num2) {
    // your code here
    if(num1 ==0 || num2 ==0){
        return 0;
    }
    const negativeResult = (num1 < 0) !== (num2 < 0);

    // Trabajamos con valores absolutos usando sumas repetidas
    const abs1 = Math.abs(num1);
    const abs2 = Math.abs(num2);
    let result = 0;

    // Sumamos absA, absB veces
    for (let i = 0; i < abs2; i++) {
        result += abs1;
    }

    // Aplicamos el signo
    return negativeResult ? -result : result;
}

let output = multiply(4, 7);
console.log(output); // --> 28

let output2 = multiply(6, 5);
console.log(output2);