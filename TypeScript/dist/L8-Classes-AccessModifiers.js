"use strict";
/*
CLASSES
----------------------------------------
SUMMARY
* Classes are similar to interfaces, although they provide a bit more features
    Interfaces enforce a structure within values while classes are a way to create objects with a certain structure
* To create a class use the class keyword and then give it a name with a capital letter (pascal case)
* Classes include a constructor that will accept arguments and these arguments must be passed in when a new object is made from the class
* Access modifiers are keywords placed in front of class properties and methods to dictate how they can be accessed
    The public keyword makes the properties and methods accessible so they can be modified by anyone (typically used for methods)
    The private keyword makes the properties and methods inaccessible (typically used for properties)
    Properties and methods made private can still be accessed within the class
* Access modifiers can be used in front arguments within the constructor function to set them on the class instance
*/
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = 'classic';
        this.toppings = [];
    }
    selectBase(b) {
        this.base = b;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((item) => item !== topping);
    }
}
/*
The Pizza class has a constructor that accepts the title and price arguments assigning them to the corresponding properties
The base property is assigned to union type that can be one of four different strings
The toppings property is assigned to an empty array that can only contain strings
The title, price, base, and toppings properties are set to private so they can't be modified outside the class
The selectBase method allows for a new base to be selected rather than the classic default
The addTopping method adds toppings to the toppings array
The removeTopping method removes toppings from the toppings array
*/
const pizza = new Pizza('Meat Lovers', 24);
// Creates a new instance of the Pizza class and saves it within the pizza variable
// The title value is assigned to Meat Lovers and the price value is assigned to 24
// pizza.title 
// The title property is private so once the pizza instance is made the title can't be changed unless there's a public method
pizza.selectBase('thin');
// Sets the base to be thin rather than the default classic
// pizza.selectBase('crispy')
// No base option can be chosen that's not defined within the Base type otherwise it will create an error
pizza.addTopping('pepperoni');
pizza.addTopping('italian sausage');
pizza.addTopping('pork');
pizza.addTopping('canadian bacon');
pizza.addTopping('ham');
pizza.addTopping('olives');
// Adds the toppings to the toppings array
pizza.removeTopping('olives');
// Removes the olives topping
const pizzaTwo = new Pizza('Vegetarian', 20);
console.log(pizza);
console.log(pizzaTwo);
// ----------------------------------------
// CLASSES AS TYPES
function addOlivesToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('olives');
    }
}
/*
The addOlivesToPizzas function takes an array of values that must be of the Pizza type
Then a for loop utilizing the addTopping function is used to add the olives to every pizza in the array
*/
addOlivesToPizzas([pizza, pizzaTwo]);
console.log(pizza);
console.log(pizzaTwo);
