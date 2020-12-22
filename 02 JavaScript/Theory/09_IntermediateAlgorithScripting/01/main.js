function sumAll(arr) {
    let sum = 0;
    arr.sort(function (a, b) {
        return a - b
    });
    console.log(arr)
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }

    console.log(sum)
    return sum;
}

sumAll([5, 10]);