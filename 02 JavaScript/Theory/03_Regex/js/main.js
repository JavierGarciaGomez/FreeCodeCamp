// 1
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
// 2
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
// 3
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

// 4
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
// 5
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
// 6
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result)
// 7
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
// 8
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result)
// 9
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result);
// 10
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
// 11
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
// 12
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
// 13
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
// 14
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h*?1>/; // Change this line
let result = text.match(myRegex);
// 15
let crowd = "P1P2P3P4P5P6CCCP7P8P9";

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);

console.log(matchedCriminals);
// 16
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
// 17
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result)
// 18
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);
// 19
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
// 20
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
// 21
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
// 22
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)
// 23
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
// 24
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
// 25
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; // Change this line
let result = ohRegex.test(ohStr);
// 26
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
// 27
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
// 28
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
// 29
let sampleWord = "astronaut";
var pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
// 30
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);

// 31
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
// 32
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
// 33
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line