/* Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

//////////////////MINE/////////////////////
function smallestCommons(arr) {
    let maxNum = 1;
    arr.sort((a, b) => a - b);
    let numArray = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        maxNum *= i;
        numArray.push(i);
    }


    let foundIt = false;
    // Loop trouhgh all the numbers
    for (let i = arr[1]; i < maxNum; i++) {
        // Loop through all the values
        for (let j = 0; j < numArray.length; j++) {
            if (i % numArray[j] != 0) {
                foundIt = false;
                break;
            } else {
                foundIt = true;
            }
        }
        if (foundIt) {
            return i;
        }
    }
}
//////////////////FLORIN/////////////////////
function smallestCommonsFLO(arr) {
    arr.sort((a, b) => a - b);
    let numArray = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        numArray.push(i);
    }

    const prod = numArray.reduce((acc, item) => acc *= item, 1);

    // loot through all possible common multiples
    for (let i = 1; i <= prod; i++) {
        //let testArray = numArray.filter(number => i % number === 0);
        // mades an array of numbers that has the number as a divisor
        const length = numArray.filter(number => i % number === 0).length;
        //console.log(testArray);
        //console.log(length);
        // if the length of this new array is equal of the original array: RETURN
        if (length === numArray.length) {
            return i;
        }
    }
}

//////////////////TEST/////////////////////
console.log(smallestCommons([18, 23]));