// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  var newArray = [];
  this.forEach(element => console.log(element));
  console.log(callback);

  this.forEach(function (x) {
    console.log('testing' + x);

    if (callback(x) == true) {
      console.log('It was true');
      newArray.push(x);
    }
  })


  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

var new_s2 = s.myFilter(function (item) {
  return false;
});



console.log(new_s2);