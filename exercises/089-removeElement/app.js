// Write your function here
function removeElement(array, elementToRemove) {
    return array.filter(function(item) {
        return item !== elementToRemove;
    });
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // → [1, 3, 1]
