// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

//////////////MINE///////////////////////////////////
function fearNotLetter(str) {
    let previousValue = str[0].charCodeAt(0) - 1;
    let newValue;
    for (let i = 0; i < str.length; i++) {
        newValue = str[i].charCodeAt(0);
        if ((newValue - previousValue) !== 1) {
            return String.fromCharCode(newValue - 1)
        }
        previousValue = newValue;
    }

}

/////////////FLORN////////////////////////////////////
function fearNotLetterFL(str) {
    const arr = str.split('').map(letter => letter.charCodeAt(0));
    console.log(arr)


    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return String.fromCharCode(arr[i] + 1);
        }
    }
}
//////////////TEST///////////////////////////////////

console.log(fearNotLetterFL('abcefg'));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter('abc'));