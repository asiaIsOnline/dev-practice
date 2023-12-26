/*
FUNCTION SIGNATURES
----------------------------------------
SUMMARY
* Function signatures describe the general structure of a type of function describing what argument types it should accept 
    and what type of value it returns
* To adhere to a function signature the function does not need to have all or any of the defined parameters
* However, the function cannot have more parameters then the function signature otherwise it won't adhere
*/

type Calculator = (numOne: number, numTwo: number) => number
// Calculator is a function signature that accepts two number parameters and returns a number


function addTwoNumber(a: number, b: number) {
    return a + b;
}

function multiplyTwoNumbers(first: number, second: number) {
    return first * second;
}

function squareNumber(num: number) {
    return num * num;
}

function joinTwoNumbers(num1: number, num2: number) {
    return `${num1}${num2}`
}


let calcs: Calculator[] = []
// The calcs variable is an array of functions that can only contain functions that adhere to the Calculator function signature


calcs.push(addTwoNumber);
// The addTwoNumber function can be added because it adheres to the Calculator function signature 
// It accepts two number values and returns a number

calcs.push(multiplyTwoNumbers);
// The multiplyTwoNumbers function adheres to the Calculator function signature 
// It accepts two number values and returns a number

calcs.push(squareNumber);
// The squareNumber function adheres to the Calculator function signature
// It accepts one number value and returns a number

// calcs.push(joinTwoNumbers);
// The joinTwoNumbers function does not adhere to the Calculator function signature so it cannot be pushed to the calcs array
// It accepts two number values and returns a string rather than a number

// ----------------------------------------
// FUNCTION SIGNATURES ON INTERFACES

interface HasArea {
    name: string,
    calcArea: (a: number) => number
}
// The HasArea has a calcArea property assigned to a function signature 
// Any objects that adhere to the HasArea interface must include a name and a calcArea function that returns a number
// The calcArea function signature could also be written as calcArea(a: number): number

const shapeOne: HasArea = {
    name: 'square',
    calcArea(length: number) {
        return length * length
    }
}

const shapeTwo: HasArea = {
    name: 'circle',
    calcArea(radius: number) {
        return Math.PI * radius^2
    }
}

console.log(shapeOne.calcArea(5));
// Returns 25

console.log(shapeTwo.calcArea(8));
// Returns 27