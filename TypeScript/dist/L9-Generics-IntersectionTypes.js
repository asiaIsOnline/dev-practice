"use strict";
/*
Generics
----------------------------------------
SUMMARY
* Generics provide a way to make generic, reusable structures that can be used by many different data types
* To create a generic function add angle brackets before the parentheses and within include name (T is the common convention)
* This name represents the data type that will be passed into the function
* When the function is invoked the value as well as the data type of that value will need to be passed in
*/
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
// The T is used to represent the data type for the generic logAndReturnValue function 
const resultOne = logAndReturnValue('mario');
// resultOne is recognized as a string type
const resultTwo = logAndReturnValue(23);
// resultOne is recognized as a number type
//const resultThree = logAndReturnValue<boolean>(3)
// resultThree would return an error because boolean is the expected value type and the value of 3 does not match
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const players = [
    { name: 'Asia', highScore: 80 },
    { name: 'Nick', highScore: 78 },
    { name: 'Raven', highScore: 88 },
    { name: 'Victor', highScore: 90 }
];
// the players variable contains any array with the items within adhering to the Player interface
const randomPlayer = getRandomArrayValue(players);
// randomPlayer then saves a randomly chosen object from the players array that was passed to the getRandomArrayValue function
console.log(randomPlayer);
function addIDToValue(val) {
    const id = Math.floor(Math.random() * 1000000);
    return Object.assign(Object.assign({}, val), { id });
}
const newEmployee = addIDToValue({ name: 'Paula', role: 'Designer', yearsWorked: 5 });
console.log(`Welcome our new hire ${newEmployee.name}`);
console.log(`They've been working as a ${newEmployee.role} for ${newEmployee.yearsWorked}`);
console.log(`${newEmployee.name} your work id number is: ${newEmployee.id}`);
// ----------------------------------------
// GENERIC INTERFACES
// ----------------------------------------
// GENERIC CLASSES
// ----------------------------------------
// GENERIC CONSTRAINTS
