function sentensify(str) {
  // Only change code below this line
  let newArr = str.split(/[-\s,.]/);
  console.log(newArr)
  let newStr = newArr.join(' ')
  console.log(newStr)
  return newStr;

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");