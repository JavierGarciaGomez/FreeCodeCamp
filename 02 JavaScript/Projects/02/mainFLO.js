const converted = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

function convertToRomanFLO(num) {
    let final = '';

    // for every roman element
    for (let roman in converted) {
        // loop while the number is greater than roman
        while (num >= converted[roman]) {
            // made the number lower
            num -= converted[roman];
            // add it to final
            final += roman;
        }
    }


    return final;
}

console.log('here')
console.log(convertToRomanFLO(3999)); // MMMCMXCIX