/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    const finalArr = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            // recursiveley call the func
            finalArr.push(...steamrollArray(element));
        } else {
            finalArr.push(element);
        }
    });
    return finalArr;
}


console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));