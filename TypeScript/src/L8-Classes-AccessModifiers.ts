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

* Classes can act as parent classes with generic properties and methods that other classes can inherit 

* When classes implement interfaces the properties in the class must be defined within the interface. 
    This is useful when different data types need to have the same functionality.

* An abstract class is a class that can have properties and methods and can be inherited from by other classes 
    However, the class can never be used to create a new instance of itself
    To make an abstract class place the abstract keyword before the class keyword
    Properties and methods defined as abstract don't get implemented within the class 
    instead they act as a structure to enforce within child classes or any class that extends the abstract class. 
    This is useful when we want classes that inherit from an abstract parent class to have the same properties and methods
    but we want those classes to be able to implement the functionality in the way that works best for that class.
*/

type Base = 'classic' | 'thick' | 'thin'

class Pizza {
    constructor(
        private title: string, 
        private price: number
        ) {}

    private base: Base = 'classic'
    private toppings: string[] = []

    selectBase(b: Base): void {
        this.base = b
    }

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
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

const pizza = new Pizza('Meat Lovers', 24)
// Creates a new instance of the Pizza class and saves it within the pizza variable
// The title value is assigned to Meat Lovers and the price value is assigned to 24

// pizza.title 
// The title property is private so once the pizza instance is made the title can't be changed unless there's a public method

pizza.selectBase('thin')
// Sets the base to be thin rather than the default classic

// pizza.selectBase('crispy')
// No base option can be chosen that's not defined within the Base type otherwise it will create an error

pizza.addTopping('pepperoni')
pizza.addTopping('italian sausage')
pizza.addTopping('pork')
pizza.addTopping('canadian bacon')
pizza.addTopping('ham')
pizza.addTopping('olives')
// Adds the toppings to the toppings array

pizza.removeTopping('olives')
// Removes the olives topping

const pizzaTwo = new Pizza('Vegetarian', 20)

console.log(pizza)
console.log(pizzaTwo)

// ----------------------------------------
// CLASSES AS TYPES

function addOlivesToPizzas(pizzas: Pizza[]): void {
    for (const p of pizzas) {
        p.addTopping('olives');
    }
}
/*
The addOlivesToPizzas function takes an array of values that must be of the Pizza type
Then a for loop utilizing the addTopping function is used to add the olives to every pizza in the array
*/

addOlivesToPizzas([pizza, pizzaTwo])

console.log(pizza)
console.log(pizzaTwo)

// ----------------------------------------
// INHERITANCE

abstract class MenuItem implements HasFormatter {
    constructor(private title: string, private price: number){}

    get details(): string {
        return `${this.title}: ${this.price}`
    }

    /*
    format() {
        return `This menu item is called ${this.title} and is $${this.price}.`
    }
    */

    abstract format(): string
}
// The get keyword is used to make a function behave like a property
// The MenuItem class must have the format() function because it is implementing the HasFormatter interface
// When making abstract methods or properties (like the format method) in a class it means that any class
// that extends the abstract class must implmenet the properties and methods accordingly 

type PastaBase = 'spaghetti' | 'penne' | 'fetticini' | 'rotini' | 'macaroni'
type PastaSauce = 'bolognese' | 'alfredo' | 'pesto' | 'marinara'

class Pasta extends MenuItem {
    constructor(title: string, price: number) {
        super(title, price)
    }
    private base: PastaBase = 'spaghetti'
    private sauce: PastaSauce = 'bolognese'
    private toppings: string[] = []
    
    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((item) => item !== topping);
    }

    format(): string {
        let formatted = this.details + `\n`
        
        // base
        formatted += `A ${this.base} served with a ${this.sauce} on top, `

        // toppings
        if (this.toppings.length < 1) {
            formatted += `and no chosen toppings.`
        } 
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(', ')}.`
        }

        return formatted
    }
}
// The Pasta class inherits the title and price properties as well as the details method from the MenuItem class
// The format class inherits the details method (which acts as a property because of the get keyword)

let newPasta = new Pasta('Spaghetti Bolognese', 28)


type BurgerDoneness = 'well-done' | 'medium well' | 'medium' | 'medium rare' | 'rare'

class Burger extends MenuItem {

    private burger: BurgerDoneness = 'medium'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((item) => item !== topping);
    }

    format(): string {
        let formatted = this.details + `\n`
        
        // base
        formatted += `A fresh ${this.burger} burger on top of a potato bun, `

        // toppings
        if (this.toppings.length < 1) {
            formatted += `with no chosen toppings.`
        } 
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(', ')}.`
        }

        return formatted
    }
}

function printMenuItem(item: MenuItem) {
    console.log(item.details)
}
// The item that needs to be passed to the printMenuItem function must adhere to the MenuItem type
// This means that the item will automatically have access to the details method that acts as a property

printMenuItem(newPasta);
// Returns Spaghetti Bolognese: 28

// ----------------------------------------
// CLASSES WITH INTERFACES
 
interface HasFormatter {
    format(): string 
}
// Check the MenuItem class to see how this interface is implemented

function printFormattedMenuItem(val: HasFormatter): void {
    console.log(val.format());
}
// The printFormatted function accepts values that adhere to the HasFormatter interface

// printFormattedMenuItem(newPasta);
// Returns This menu item is called Spaghetti Bolognese and is $28.

// ----------------------------------------
// ABSTRACT CLASSES
// To see an abstract class check the MenuItem class above
newPasta.addTopping('mushrooms');

printFormattedMenuItem(newPasta)