let romanUnits = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX'
}

let romanTens = {
    '1': 'X',
    '2': 'XX',
    '3': 'XXX',
    '4': 'XL',
    '5': 'L',
    '6': 'LX',
    '7': 'LXX',
    '8': 'LXXX',
    '9': 'XC'
}

let romanHundreds = {
    '1': 'C',
    '2': 'CC',
    '3': 'CCC',
    '4': 'CD',
    '5': 'D',
    '6': 'DC',
    '7': 'DCC',
    '8': 'DCCC',
    '9': 'CM'
}

let romanThousands = {
    '1': 'M',
    '2': 'MM',
    '3': 'MMM',
}

function convertToRoman(num) {
    let romanNumberArr = []
    let tempNum
    romanNumberArr.unshift(romanUnits[num % 10]);
    tempNum = (parseInt(num / 10)) % 10;
    romanNumberArr.unshift(romanTens[tempNum % 100]);
    tempNum = (parseInt(num / 100)) % 10;
    console.log(tempNum)
    romanNumberArr.unshift(romanHundreds[tempNum % 100]);
    tempNum = (parseInt(num / 1000)) % 10;
    romanNumberArr.unshift(romanThousands[tempNum % 100]);


    return romanNumberArr.join('');
}

console.log(convertToRoman(3999)); // MMMCMXCIX