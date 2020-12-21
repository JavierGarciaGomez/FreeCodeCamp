function checkPositive(arr) {
    // Only change code below this line
    let arePositive = arr.every(function (curValue) {
        return curValue >= 0;
    })
    return arePositive;


    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, 4, 5]));