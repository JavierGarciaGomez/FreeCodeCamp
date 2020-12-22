/*Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

////////////////FIRST TRY/////////////////////////
function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arrString = str.split('');
    let indexLastConsonant = 0;
    let newString;
    let suffix;
    let isAllConsonants = false;
    console.log(arrString)

    for (let i = 0; i < arrString.length; i++) {
        if (vowels.includes(arrString[i])) {
            indexLastConsonant = i;
            break;
        }
        if (i === arrString.length - 1 && indexLastConsonant == 0) {
            isAllConsonants = true;
        }
    }
    suffix = indexLastConsonant === 0 ? 'way' : 'ay'
    if (isAllConsonants) {
        suffix = 'ay'
    }
    console.log(indexLastConsonant)
    let firstConsonants = arrString.splice(0, indexLastConsonant);
    console.log('printing firstcons' + firstConsonants)
    console.log(arrString);
    newString = arrString.join('') + firstConsonants.join('') + suffix;
    console.log('**************' + newString)
    return newString;
}

////////////////FLORIN/////////////////////////
function translatePigLatinFL(str) {
    // regex: 
    // ^ beggining of the input
    // () element separator
    // + one or more characters
    // .* tje rest
    const regex = /^([^aeiou]+)(.*)/;
    if (regex.test(str)) {
        str = str.replace(regex, '$2$1ay');
    } else {
        str += 'way';
    }

    return str;
}

////////////////TEST/////////////////////////
translatePigLatinFL("consonant");
console.log(translatePigLatinFL('glove'));
console.log(translatePigLatinFL('air'));
console.log(translatePigLatinFL('california')); // aliforniacay
console.log(translatePigLatinFL('rhythm')); // rhytmay