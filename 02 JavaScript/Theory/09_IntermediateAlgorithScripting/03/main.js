function destroyer(arr) {
    // Getting the args
    var args = Array.prototype.slice.call(arguments);
    // Pritinging the args
    console.log(args);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            //console.log(`arrValue: ${arr[i]} and the argValue: ${args[j]}`)
            if (arr[i] === args[j]) {
                //console.log('It matches im gona delete from arr: ' + arr[i]);
                delete arr[i];
                //console.log(`******now my arg is: ${arr}`)
            }
        }



    }
    arr = arr.filter(Boolean);
    console.log(arr)

    return arr;
}

//////////////////FLORIN APPROACH////////////////////////
function destroyerFL(arr, ...rest) {
    console.log(arr);
    console.log(...rest);
    let newArr = arr.filter(item => rest.indexOf(item) === -1);
    console.log(newArr);
}



///////////////////TESTS/////////////////////////////
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyerFL([1, 2, 3, 1, 2, 3], 2, 3);


// function destroyer(arr) {
//     var args = Array.prototype.slice.call(arguments);

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < args.length; j++) {
//             if (arr[i] === args[j]) {
//                 delete arr[i];
//             }
//         }
//     }
//     return arr.filter(Boolean);
// }