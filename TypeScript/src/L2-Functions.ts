/*
FUNCTIONS & TYPE ALIAS
----------------------------------------
SUMMARY
* Functions made with the function keyword as well as arrow functions can be made with TypeScript
* TypeScript functions must return a value of a specific type
* Functions that do not return a value will have the void type
* Function parameters need to have explicit types assigned to them
* Optional parameters can be assigned within a function
*/

// ----------------------------------------
// BASICS
let sayHello = ():string => {
    return "Hello there!"
}
// Use a colon and a data type after the parentheses to explicitly declare the type of value the function should return
// The sayHello function must return a 'string' type which is why "Hello there!" does not cause an error

function addTwoNumbers(a: number, b: number):number {
    return a + b;
}
// Functions can also be written using the function keyword


// ----------------------------------------
// RETURN & VOID

let sayHi = () => {
    console.log("Hi, welcome!");   
}
// This function returns a inferred void type because the function is not returning any specific value
// The void type means no value is being returned from the function

let sayGoodMorning = () => {
    return "Good Morning!";   
}
// This function has a inferred string type because the function is returning the string value "Good Morning!"

// ----------------------------------------
// PARAMETERS

let multiplyNumbers = (num1 : number, num2 : number): number => {
    return num1 * num2;
}
// This function returns a 'number' type and accepts two explicit number parameters 


multiplyNumbers(4, 3);
// This would return 12 because 3 and 4 are numbers and the function returns the 'number' type


let addNumbers = (num1 : number, num2 : number, anotherNum? : number): number => {
    if (anotherNum) {
        return num1 + num2 + anotherNum;
    } else {
        return num1 + num2;
    }
}
// This function returns a 'number' type and accepts three explicit number parameters: num1, num2, and anotherNum 
// The anotherNum parameter is optional so the addNumbers function will run even if the third parameter is omitted

console.log(addNumbers(5, 10));
// Returns 15

console.log(addNumbers(5, 10, 10));
// Returns 25

// addNumbers(5, 10, 10, 5);
//Returns an error because the addNumbers function will only accept 3 parameters