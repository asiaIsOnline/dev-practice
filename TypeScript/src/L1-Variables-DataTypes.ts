/*
VARIABLES & DATA TYPES
----------------------------------------
SUMMARY
* By only assigning a value to a variable TypeScript will use type inference to implicitly assign that variable a value type
* Types can also be explicitly assigned to variables by using type annotation
* Arrays can only contain elements of the same type unless an array is explicitly or implicitly assigned to have multiple types
* Object literals can have a defined type which assigns property names to specific value types
* A variable declared without an explicit type or implicit value can hold any value (like a normal JavaScript variable)
* A variable can also be declared with the any value meaning it can then be reassigned to any data type
* However, variables without a declared type should be avoided in TypeScript
* When migrating a project from JavaScript to TypeScript it may be beneficial to use the any type
*/

// ----------------------------------------
// PRIMITIVE DATA TYPES

// STRINGS
//The greeting variable is implicitly assigned to type 'string' because of the "hello" value through type inference
let greeting = "hello";
greeting = "hi";

// greeting = 18; 
// This would throw an error because the greeting variable is assigned to type 'string' not 'number'

// NUMBERS
// age variable is explicitly assigned to type 'number' 
let age: number;

// The age variable is then assigned a value
age = 18;

/*
age = "eighteen";
This would throw an error because age is assigned to type 'number' not 'string' 
*/

// The newAge variable is explicitly assigned to type 'number' and assigned a value
let newAge: number = 21; 

// The day variable is explicitly assigned to both types 'string' and 'number' 
let day: string | number;

day = "tenth"
day = 10;

// BOOLEAN
let isFiction: boolean = true; 


// ----------------------------------------
// ARRAYS

let names = ['tim', 'sarah', 'john'];
// The names array is assigned to 'string' elements and implicitly assigned to type 'string' 

names.push('tammy');

/*
names.push(80);
This would throw an error because 80 is type 'number' not 'string' 
*/

let numbers : number[];
// The numbers array is explicitly assigned to accept 'number' elements

numbers = [56, 90, 104];

const num = numbers[2];
// The num variable can now only contain values of the number data type

let month: (string | number)[]

month = ["january", 1, "march", 2];
// The month array is explicitly assigned to both types 'string' and 'number' 

let randomStuff = [23, 'Jasmine', true]
// The randomStuff array has multiple data types within making it a union type

let thing = randomStuff[1];
// The thing variable's value can be any one of the data types used within the randomStuff array


// ----------------------------------------
// TUPLES
// Tuples are essentially an array of values of different types in a specific order

let person: [string, number, boolean] = ['mario', 30, true]
// The person variable is a tuple type that must contain a string, number, and boolean value in that order

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.7, 20.1]

function useCoords(): [number, number] {
    // get coordinates

    const lat = 100
    const long = 50

    return [lat, long]
}
// The useCoords function returns a tuple that must contain two numbers

const [lat, long] = useCoords()

let employee: [name: string, id: number]
// The employee variable contains a named tuple type which will help provide more feedback

employee = ['Andrew', 34]
console.log(employee[0])

// ----------------------------------------
// OBJECT LITERALS

let user = {
    username: "johnsmith02",
    age: 30, 
    isAdmin: false,   
}
// The user object implicitly defines the types for the username, age, and isAdmin properties

user.username = "johnsmith30";


// user.isAdmin = "no";
// This would throw an error because user.isAdmin is implicitly assigned to the type 'boolean'  


// user.phone = "+12345678910";
// This would throw an error because the phone key does not exist within the user object  

let userObj : {
    username: string;
    age: number;
    isAdmin: boolean;
}
// The userObj object explicitly defines the types for the username, age, and isAdmin properties
// Note the use of a colon(:) rather than the assignment operator(=) and the properties ending in a semicolon(;)


/*
userObj : {
    username: "john";
    age: 30;
}
This would throw an error because the isAdmin property is not defined  
*/

/*
userObj : {
    username: "john";
    age: 30;
    isAdmin: true;
    phone: "+12345678910";
}
This would throw an error because the phone key was not defined in userObj
*/

let userObj2 : {
    username: string;
    age: number;
    isAdmin: boolean;
    phone?: string;
}
// The userObj2 object creates a conditional property for phone and explicitly assigns it to a 'string' type

userObj2 = {
    username: "jane",
    age: 22,
    isAdmin: true,
    phone: "+12345678910"
}

let userObj3 : {firstName: string, age: number, id: number} = {
    firstName: 'Anna',
    age: 34,
    id: 34023495
}
// The userObj3 has properties and values that match the defined types in the initial set of curly braces making it valid

// userObj3.firstName = 4
// This would result in an error because the firstName property is assigned to a string

// userObj3.email = "annagonzales@gmail.com"
// This would result in an error because properties that are not already defined in the type cannot be added 


// ----------------------------------------
// ANY TYPE

let testVariable;

testVariable = 12;
testVariable = "hi";
testVariable = true;
testVariable = [1, 2, 3];
testVariable = {}
// The testVariable is declared and implicitly it can hold any value

let anyVariable: any;
// The anyVariable is declared and explicilty it can hold any value


let testArray : any[];
testArray = [1, 2, 3, "one", "two", "three", false, []];
// The testArray is declared and explicilty it can hold elements of any type