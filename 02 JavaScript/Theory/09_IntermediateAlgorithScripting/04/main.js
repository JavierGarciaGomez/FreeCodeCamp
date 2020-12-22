////////////////////////////////////MINE////////////////////////////////////////
function whatIsInANameMINE(collection, source) {
    var arr = [];
    // Only change code below this line
    console.log(collection)
    console.log(source)

    let property = Object.keys(source)
    console.log(property)

    for (element in collection) {
        console.log(collection[element])
        console.log()
        if (collection[element][property] === source[property]) {
            console.log('YES')
            arr.push(collection[element])

        }
    }
    console.log(arr);

    // Only change code above this line
    return arr;
}

////////////////////////////////////SOLUTION1////////////////////////////////////////
function whatIsInANameSol1(collection, source) {
    // I get the keys
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        // for each key
        for (var i = 0; i < srcKeys.length; i++) {
            // if the object doesnt have the property or if it has it but doesnt match: FALSE
            if (
                !obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
            // If not, try with next iteration
        }
        // If none is false, then is true
        return true;
    });
}

////////////////////////////////////SOLUTION2////////////////////////////////////////
function whatIsInANameSol2(collection, source) {
    var srcKeys = Object.keys(source);

    // filter with a function
    return collection.filter(function (obj) {
        console.log('INSIDE filter')
        // 
        return srcKeys.every(function (key) {
            console.log('INSIDE every')
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

////////////////////////////////////FLORIN////////////////////////////////////////
function whatIsInANameFL(collection, source) {
    var arr = []
    // Iterate in the collection
    collection.forEach(element => {
        console.log(element)
        // iterate the key of the soutce
        for (let key in source) {
            // check if the element has the source key and if its value is equal to tue source value
            if (element[key] && element[key] === source[key]) {
                console.log('HERE');
                arr.push(element);
            }
        }
    });


}
////////////////////////////////////PRACTICE////////////////////////////////////////


console.log(whatIsInANameFL([{
    "apple": 1
}, {
    "apple": 1
}, {
    "apple": 1,
    "bat": 2
}], {
    "bat": 2
}));