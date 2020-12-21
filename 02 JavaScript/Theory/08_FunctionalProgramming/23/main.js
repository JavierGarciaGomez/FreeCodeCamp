function checkPositive(arr) {
    // Only change code below this line
    let somePositive = arr.some(function (curValue) {
        return curValue >= 0;
    })
    return somePositive;

    // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);