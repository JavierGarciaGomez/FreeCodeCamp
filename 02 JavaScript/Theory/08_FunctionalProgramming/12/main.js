function nonMutatingSplice(cities) {
  // Only change code below this line
  let newArr = cities.slice(0, 3);
  console.log(newArr)
  return newArr;

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);