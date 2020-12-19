// 1

// single line comment
/* multiple line comment
 */

//2

var myName;

//  3

// Setup
var a;

// Only change code below this line

a = 7;

// 4
// Setup
var a;
a = 7;
var b;

// Only change code below this line

b = a;

// 5
var myVar = 9;

// 6
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line
a = 5
b = 10
c = 'I am a'

a = a + 1;
b = b + 5;
c = c + " String!";

// 7
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 8
var sum = 10 + 10;

// 9
var difference = 45 - 33;

// 10
var product = 8 * 10;

// 11
var quotient = 66 / 33;

// 12
var myVar = 87;

// Only change code below this line
myVar++;

// 13
var myVar = 11;

// Only change code below this line
myVar--;

// 14
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 1.1;

// 15
var product = 2.0 * 2.5;

// 16
var quotient = 4.4 / 2.0; // Change this line

// 17
var remainder = 11 % 3;

// 18
// Only change code below this line
a += 12;
b += b;
c += 7;

// 19
a -= 6;
b -= 15;
c -= 1;

// 20
a *= 5;
b *= 3;
c *= 10;

// 21
a /= 12;
b /= 4;
c /= 11;

// 22
var myFirstName = 'Javier';
var myLastName = 'García Gómez';

// 23
var myStr =
    var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// 24
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 25
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// 26
var myStr = "This is the start. " + "This is the end."; // Change this line

// 27
// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// 28
// Only change code below this line
var myName = "Javier";
var myStr = "My Name is " + myName + " and I am well";

// 29
// Change code below this line

var someAdjective = 'nice';
var myStr = "Learning to code is "
myStr += someAdjective;

// 30
lastNameLength = lastName.length;

// 31
firstLetterOfLastName = lastName[0]; // Change this line

// 32
firstLetterOfLastName = lastName[0]; // Change this line

// 33
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// 34
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// 35
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// 36
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

// 37
var myArray = ["ha", 2];

// 38
var myArray = [
    [2],
    [1, 'a']
];

// 39
// Setup
var myArray = [50, 60, 70];

// Only change code below this line
var myData = myArray[0];

// 40
// Setup
var myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

// 41
// Setup
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];

// Only change code below this line
var myData = myArray[2][1];

// 42
// Setup
var myArray = [
    ["John", 23],
    ["cat", 2]
];

// Only change code below this line
myArray.push(['dog', 3]);

// 43
// Setup
var myArray = [
    ["John", 23],
    ["cat", 2]
];

// Only change code below this line
var removedFromMyArray = myArray.pop();

// 44
// Setup
var myArray = [
    ["John", 23],
    ["dog", 3]
];

// Only change code below this line
var removedFromMyArray = myArray.shift();

// 45
// Setup
var myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();

// Only change code below this line
myArray.unshift(['Paul', 35])

// 46
["Chocolate Bar", 15]

// 47
function reusableFunction() {
    console.log('Hi World');
}

// 48
function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
}

functionWithArgs(3, 4);

// 49
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// 50
function myLocalScope() {

    // Only change code below this line
    var myVar = 4;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//   51
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";



    // Only change code above this line
    return outerWear;
}

myOutfit();

// 52
function timesFive(num) {
    return num * 5;
}

// 53
// Setup
var sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// 54
// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// 55
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();

    return item;
    // Only change code above this line


}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// 56
function welcomeToBooleans() {

    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}

//   57
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return "Yes, that was true"
    } else {
        return "No, that was false"
    }



    // Only change code above this line

}

//   58
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

//59
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);



//60
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

//   61
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//   62
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

//   63
function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

//   64
function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);
// 65
function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);
// 66

function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);
// 67
function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";

    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);
// 68
function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";

    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);


// 69
function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);
// 70
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

//   71
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//   72
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    } else if (num < 15) {
        return 'Medium'
    } else if (num < 20) {
        return 'Large'
    } else if (num >= 20) {
        return 'Huge'
    } else


        return "Change Me";
    // Only change code above this line
}

testSize(7);

// 73
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) {
        return names[0];
    } else if ((strokes - par) <= -2) {
        return names[1]
    } else if ((strokes - par) === -1) {
        return names[2]
    } else if ((strokes - par) === 0) {
        return names[3]
    } else if ((strokes - par) === 1) {
        return names[4]
    } else if ((strokes - par) === 2) {
        return names[5]
    } else {
        return names[6]
    }


    return "Change Me";
    // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(5, 4));
// 74
function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = 'alpha'
            break;

        case 2:
            answer = 'beta'
            break;

        case 3:
            answer = 'gamma'
            break;

        case 4:
            answer = 'delta'
            break;
    }



    // Only change code above this line
    return answer;
}

caseInSwitch(1);
// 75
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            return 'apple';
            break;

        case 'b':
            return 'bird';
            break;

        case 'c':
            return 'cat';
            break;

        default:
            return 'stuff';
            break;


    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);

// 76
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            return 'Low';
            break;

        case 4:
        case 5:
        case 6:
            return 'Mid';
            break;

        case 7:
        case 8:
        case 9:
            return 'High';
            break;


    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);

// 77
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case 'bob':
            answer = 'Marley';
            break;

        case 42:
            answer = 'The Answer';
            break;

        case 1:
            answer = "There is no #1";
            break;

        case 99:
            answer = "Missed me by this much!";
            break;

        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);
// 78
function isLess(a, b) {
    // Only change code below this line
    return a < b;
}

isLess(10, 15);

// 79
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// 80
var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 7:
        case 8:
        case 9:
            break;

        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
    }

    if (count > 0) {
        return count + ' Bet';
    } else {
        return count + ' Hold';
    }

    return "Change Me";
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// 81
var myDog = {
    // Only change code below this line
    name: 'Dog',
    legs: 4,
    tails: 1,
    friends: ['Lucky', 'Lucko']

    // Only change code above this line
};

// 82
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
console.log(testObj.hat)

var hatValue = testObj.hat; // Change this line
var shirtValue = testObj.shirt; // Change this line

console.log(hatValue)
// 83
// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj['an entree']; // Change this line
var drinkValue = testObj['the drink']; // Change this line

// 84
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber = 16; // Change this line
var player = testObj[playerNumber]; // Change this line
// 85
// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = 'Happy Coder';

// 86
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.bark = 'Meow';
// 87
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

// 88
// Setup
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    var result = lookup[val];

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");
// 89
function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    } else {
        return "Not Found";
    }

    // Only change code above this line
}

console.log(checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "gift"))
// 90
var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add a record here
    {
        "artist": "ArtistName",
        "title": "AlbumName",
        "release_year": 1950,
        "formats": [
            "CD",
            "LP"
        ],

    }

];
// 91
// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line
// 92
// Setup
var myPlants = [{
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
// 93
// Setup
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        object[id][prop] = value;
    } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
        object[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        object[id][prop].push(value);
    } else if (value === "") {
        delete object[id][prop];
    }
    return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');
// 94
// Setup
var myArray = [];

// Only change code below this line
var i = 5
while (i >= 0) {
    myArray.push(i);
    i--;
}

console.log(myArray);

// 95
// Setup
var myArray = [];

// Only change code below this line

for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

console.log(myArray);
// 96
// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i < 10; i += 2) {
    myArray.push(i)
}
// 97
// Setup
var myArray = [];

// Only change code below this line

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i)
}

// 98
// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
// 99
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    // Only change code above this line
    return product;
}

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

// 100
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 5)

// 101
function sum(arr, n) {
    // Only change code below this line

    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }

    // Only change code above this line
}

console.log(sum([1, 2, 3], -1))
// 102
// Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    var contactFound = false;

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]['firstName'] === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return 'No such property'
            }
        }
    }
    return 'No such contact'
    // Only change code above this line
}


console.log('EVALUATING TESTS')
console.log(lookUpProfile("Kristian", "lastName"));

// 103
function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}

// 104
function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}

// 105
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

// 106
function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");

// 107
function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");
// 108
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);
// 109
function checkSign(num) {
    return num === 0 ? "zero" :
        num > 0 ? "positive" : "negative"
}

checkSign(10);
// 110
// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
// Only change code above this line
// 111
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}