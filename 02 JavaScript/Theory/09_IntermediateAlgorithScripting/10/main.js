/*
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values 
in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array 
should not be sorted in numerical order.

Check the assertion tests for examples.


*/

//////////////////////MINE//////////////////////////

function uniteUnique(...arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (newArr.indexOf(arr[i][j]) == -1) {
                newArr.push(arr[i][j]);
            }
        }
    }
    return newArr;
}

//////////////////////FLORIN//////////////////////////
function uniteUniqueFL(...arr) {
    let finalArr = []
    arr.forEach(innerArr => { // loop trough each inner array
        innerArr.forEach(item => { // loop through each item
            if (!finalArr.includes(item)) { // if is not included, include it
                finalArr.push(item);
            }
        })
    })
    return finalArr;
}

//////////////////////TEST//////////////////////////

console.log(uniteUniqueFL([1, 3, 2], [5, 2, 1, 4], [2, 1]));