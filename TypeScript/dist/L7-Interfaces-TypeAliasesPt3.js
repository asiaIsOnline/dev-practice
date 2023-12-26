"use strict";
/*
INTERFACES & TYPE ALIASES PT3
----------------------------------------
SUMMARY
* Interfaces can extended another interface similar to how JavaScript classes can inherit properties from another class
* When a interface extends another the value adhering to that interface must include all properties and methods of the original
    and the extended interface
*/
// This means the Bill interface inherits all properties and methods from the HasFormater interface thus obtaining the format method
const newUser = {
    id: 1,
    format() {
        return `This user has an id of ${newUser.id}.`;
    }
};
const customerBill = {
    id: 258948,
    amount: 88,
    server: 'Juan',
    format() {
        return `Id: ${customerBill.id}, Total: ${customerBill.amount}, Server: ${customerBill.server}`;
    }
};
function printFormatted(value) {
    console.log(value.format());
}
printFormatted(newUser);
// Returns This user has an id of 1.
printFormatted(customerBill);
// Returns Id: 258948, Total: 88, Server: Juan
function printBill(bill) {
    console.log(`Server: ${bill.server}`);
    console.log(bill.format());
}
// Returns Server: Juan
// Id: 258948, Total: 88, Server: Juan
// printBill(newUser);
// This function call throws an error because the printBill function requires a value that adheres to the Bill interface
// The newUser value that's being passed is missing the amount and server properties
printBill(customerBill);
// The SuperHero type extends the Person type inheriting the id and firstName properties
const personOne = {
    id: 1,
    firstName: 'Luis'
};
const personTwo = {
    id: 2,
    firstName: 'Clark',
    power: 'super strength'
};
const personThree = {
    power: 'super smart'
};
function printHero(superhero) {
    console.log(`Hero ID:${superhero.id}: Identity:${superhero.firstName} Power:${superhero.power}`);
}
//printHero(personOne);
// This function call produces an error because there is no power property
printHero(personTwo);
// This function call works because all the necessary properties are included
// printHero(personThree);
// This function call produces an error because there is no id or firstName property
