function isOldEnoughToDrink(age) {
    if (age>20){
        return true;
    }
    else{
        return false;
    }
    
}

let age = prompt("Escrive la edad:")

isOldEnoughToDrink(age)