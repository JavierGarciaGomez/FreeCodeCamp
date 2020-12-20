// 1
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log(fahrenheit)
    return fahrenheit;
}

convertToF(30);
// 2
function reverseString(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[str.length - 1 - i]);
        console.log(arr);
    }
    str = arr.join('');
    return str;
}

reverseString("hello");
// 3
function factorialize(num) {
    console.log(num);
    let newNum = 1;
    for (let i = 1; i <= num; i++) {
        newNum *= i;
    }
    return newNum;

}

factorialize(5);
// 4
function findLongestWordLength(str) {
    let array = str.split(' ');
    let maxLength = 0;
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        maxLength = array[i].length > maxLength ? array[i].length : maxLength;
    }
    console.log(maxLength)
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
// 5
function largestOfFour(arr) {
    let choosenArray = [];
    let maxNum = -1000;

    for (let element in arr) {
        for (let elementSub in arr[element]) {
            maxNum = maxNum > arr[element][elementSub] ? maxNum : arr[element][elementSub];
        }
        choosenArray.push(maxNum)
        maxNum = -1000;
    }
    console.log(choosenArray)
    return choosenArray;
}

largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
]);

//   BETTER
function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
        var largestNumber = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
        }

        results[n] = largestNumber;
    }

    return results;
}

// 6
function confirmEnding(str, target) {
    let strLength = str.length;
    let targetLength = target.length;
    let startingPoint = strLength - targetLength;
    let result = false;

    for (let i = 0; i < targetLength; i++) {
        if (str[startingPoint + i] === target[i]) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
}

confirmEnding("Bastian", "an");

//   BETTER
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

// 7
function repeatStringNumTimes(str, num) {
    let newString = ''
    for (let i = 1; i <= num; i++) {
        newString += str;
    }
    console.log(newString);
    return newString;
}

repeatStringNumTimes("abc", 3);


// 8
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// 9
function findElement(arr, func) {


    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
})
// 10
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
}


console.log(booWho(true));
console.log(booWho([1, 2, 3]));

//   BETTER
function booWho(bool) {
    return typeof bool === "boolean";
}

// test here
booWho(null);

// 11
function titleCase(str) {
    str = str.toLowerCase();

    // splitting
    let arr = str.split(' ');

    // Changing first letter of each word
    for (let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i][0];
        firstLetter = firstLetter.toUpperCase();
        arr[i] = arr[i].replace(/./, firstLetter);

    }
    let newStr = arr.join(' ');
    console.log(newStr);


    return newStr;
}

titleCase("I'm a little tea pot");

//   BETTER
String.prototype.replaceAt = function (index, character) {
    return (
        this.substr(0, index) + character + this.substr(index + character.length)
    );
};

function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st]
            .toLowerCase()
            .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
}

// 12
function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice();
    console.log(newArray)

    newArray.splice(n, 0, ...arr1);

    return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 13
function bouncer(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === undefined || arr[i] === '' || Number.isNaN(arr[i])) {
            arr.splice(i, 1)
        }
        console.log(arr)


    }
    return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);

//   BETTER
function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}
// 14
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num) return a;
    }

    return arr.length;
}
// 15
function mutation(arr) {
    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase();
    console.log(arr1)
    console.log(arr2)
    let itMatches = false;

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                itMatches = true;
                break;
            } else {
                itMatches = false;
            }
        }
        if (itMatches === false) {
            return itMatches;
        }
    }
    return itMatches;
}

console.log(mutation(["Mary", "Army"]));

function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
// 16
function chunkArrayInGroups(arr, size) {
    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31