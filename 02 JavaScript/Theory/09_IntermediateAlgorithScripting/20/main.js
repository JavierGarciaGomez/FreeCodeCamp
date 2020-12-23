/*Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.*/


var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let [firstName, lastName] = firstAndLast.split(' ');

    this.getFullName = function () {
        return firstName + ' ' + lastName;
    }
    this.setFullName = function (fullName) {
        [firstName, lastName] = fullName.split(' ');
    }

    this.getFirstName = function () {
        return firstName;
    }

    this.getLastName = function () {
        return lastName;
    }

    this.setFirstName = function (_firstName) {
        firstName = _firstName;
    }
    this.setLastName = function (_lastName) {
        lastName = _lastName;
    }


};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob))
console.log(bob.getFullName());
bob.setFirstName('Haskell');
console.log('here')
console.log(bob.getFirstName());