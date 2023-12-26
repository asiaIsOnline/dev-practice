"use strict";
/*
UNION TYPES & TYPE GUARDS
----------------------------------------
SUMMARY
* Union types allow for variables to contain values of multiple data types and are made using a vertical bar
* When passing in union types into a function we can only use properties and methods common to all allowed types
* Type guards are used to check the type of a value before utilizing type specific properties and methods
*/
let someId;
someId = 304567;
someId = '3045FD';
// The someId variable can contain either a number or a string
let email = null;
email = 'newemail@gmail.com';
// Id is a type alias that can contain either a number or a string 
let anotherId = 3456798;
anotherId = 'i3hiyrhuhwrihuwhrww3';
/*
function swapIdType(id: Id): Id {
    // parseInt(id)
    return id
}

The swapIdType function can accepts an Id type as a parameter meaning the passed value can be a number or string
The function then returns the new id which could be a number or string
However, because TypeScript does not know whether the value passed to it is a number or string
therefore parseInt (which does not work when a number is passed to it) can not be used
Only properties or methods useable by both string and number types can be used
*/
// ----------------------------------------
// TYPE GUARDS
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string specific methods and properties now
        return parseInt(id);
    }
    else {
        // can use number specific methods and properties now
        return id.toString();
    }
}
// TypeScript can deduce when using the if statement that if the id value is not a string then the value must be a number 
const idOne = swapIdType(3);
const idTwo = swapIdType('34066');
console.log(idOne, idTwo);
