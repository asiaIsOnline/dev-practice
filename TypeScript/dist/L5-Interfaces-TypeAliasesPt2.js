"use strict";
/*
INTERFACES & TYPE ALIASES PT2
----------------------------------------
SUMMARY
* By tagging interfaces with a type property there will be a shared property that can be used for type guarding
* When we create a variable that adheres to an interface by including all the properties in that interface and corresponding values
    then we can use those variables as a implementation of that interface even if those variables include additional properties
* However, object literals with additional properties can not be passed directly into the function call
*/
function logDetails(value) {
    if (value.type === 'admin') {
        console.log(`Welcome Admin ${value.lastName}`);
    }
    else {
        console.log(`Welcome ${value.firstName}`);
    }
}
const newItem = { quantity: 34 };
// The newItem variable must adhere to the hasQuantity interface so it can only have the quantity property and a number value
function printQuantity(item) {
    console.log(`The item's current quantity is: ${item.quantity}`);
    // The only property the item value is guarenteed to have is the quantity property because of the hasQuantity interface
}
const fruit = {
    name: 'mango',
    quantity: 40
};
const car = {
    name: 'Honda Civic',
    quantity: 3
};
const character = {
    name: 'Mario',
    age: 32
};
printQuantity(fruit);
// Returns The item's current quantity is: 40
printQuantity(car);
// Returns The item's current quantity is: 3
//printQuantity(character);
// Returns an error because the character object does not have a quantity property
//printQuantity({quantity: 30, title: 'new item'})
// Returns an error when an object with additional properties are passed directly into the function call
