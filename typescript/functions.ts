/*
FUNCTIONS & TYPE ALIAS
----------------------------------------
Basics
*/

// This function returns a void because it is not returning any specific type
let sayHi = () => {
    console.log("Hi, welcome!");   
}

/*
This would throw an error because sayHi is assigned to a function
sayHi = "hi";
*/

// This function returns a 'string' type with the value of "Hello there!"
let sayHello = ():string => {
    return "Hello there!"
}

// This function returns a 'number' type and accepts two explicit number parameters 
let multiplyNumbers = (num1 : number, num2 : number): number => {
    return num1 * num2;
}

/*
This would return 12 because 3 and 4 are numbers and the function returns the 'number' type of 12
multiplyNumbers(4, 3);
*/

// This function returns a 'number' type and accepts three explicit number parameters 
// The anotherNum parameter is optional so the addNumbers function will run even if the third parameter is omitted
let addNumbers = (num1 : number, num2 : number, anotherNum? : number): number => {
    if (anotherNum) {
        return num1 + num2 + anotherNum;
    } else {
        return num1 + num2;
    }
}

/*
This would return 15
addNumbers(5, 10);

This would return 25
addNumbers(5, 10, 10);

This would return an error because the addNumbers function will only accept 3 parameters
addNumbers(5, 10, 10, 5);
*/