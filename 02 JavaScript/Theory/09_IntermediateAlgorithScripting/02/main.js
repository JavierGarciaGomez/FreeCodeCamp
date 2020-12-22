function diffArray(arr1, arr2) {
    var newArr1 = getSymmetricDifference(arr1, arr2);
    var newArr2 = getSymmetricDifference(arr2, arr1);
    let lastArr = newArr1.concat(newArr2);

    return lastArr;
}

function getSymmetricDifference(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);

// Anoter solutions
function diffArray2(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

function diffArray3(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}