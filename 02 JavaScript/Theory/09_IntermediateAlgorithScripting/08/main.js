// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


///////////////////////MINE////////////////////////////////////////
function pairElement(str) {
    let fullArray = [];

    // loop each letter
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C') {
            fullArray.push(['C', 'G'])
        } else if (str[i] === 'G') {
            fullArray.push(['G', 'C'])
        } else if (str[i] === 'A') {
            fullArray.push(['A', 'T'])
        } else {
            fullArray.push(['T', 'A'])
        }

    }

    return fullArray;
}


///////////////////////FLORIN////////////////////////////////////////
const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
}

function pairElementFL(str) {
    // split
    return str.split('')
        // for each item return an array with the item ant its pair
        .map(item => (([item, pairs[item]])));
}


///////////////////////TEST////////////////////////////////////////
console.log(pairElementFL("ATCGA")); //hould return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElementFL("GCG"));
console.log(pairElementFL("CTCTA"));