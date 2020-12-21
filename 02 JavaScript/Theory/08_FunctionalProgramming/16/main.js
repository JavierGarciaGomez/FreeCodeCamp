const squareList = arr => {
  // Only change code below this line
  let newArr = [];
  // filter positive numbers
  newArr = arr.filter(element => element > 0);
  console.log(newArr)
  // filter integers
  newArr = newArr.filter(element => element % 1 === 0);
  console.log(newArr)
  // get the square
  newArr = newArr.map(element => Math.pow(element, 2));
  console.log(newArr)

  return newArr;

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// BETTER
console.log("SECOND")

const squareList2 = arr => {
  // Only change code below this line
  return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers2 = squareList2([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers2);