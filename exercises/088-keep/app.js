// Write your function here
function keep(array, element) {
    return array.filter(function(item) {
        return item === element;
    });
}

let output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // → [2, 2]
