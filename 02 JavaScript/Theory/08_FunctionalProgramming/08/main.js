// 8
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  this.forEach(element => console.log(element));
  this.forEach(element => newArray.push(element * 2));


  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s);