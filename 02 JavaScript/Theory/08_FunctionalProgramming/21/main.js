// Only change code below this line
function urlSlug(title) {
  let arr = title.trim().toLowerCase().split(/\s+/);
  let newStr = arr.join('-');
  console.log(newStr);
  return newStr;

}
// Only change code above this line
console.log(urlSlug(" Winter Is Coming"));