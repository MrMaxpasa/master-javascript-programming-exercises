function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const TAX_RATE = 0.095;  // 9.5%
    const TIP_RATE = 0.15;   // 15%

    const tax  = preTaxAndTipAmount * TAX_RATE;
    const tip  = preTaxAndTipAmount * TIP_RATE;

    return preTaxAndTipAmount + tax + tip;
    
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
