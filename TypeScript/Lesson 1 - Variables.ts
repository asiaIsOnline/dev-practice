/*
VARIABLES & TYPES
----------------------------------------
Basics
* Use variables to define strict types
* These variables will be restricted to the same type while coding
*/

//The greeting variable is implicitly assigned to type 'string' because of the "hello" value
let greeting = "hello";
greeting = "hi";

// This would throw an error because greeting is assigned to type 'string' not 'number'
// greeting = 18; 

// age variable is explicitly assigned to type 'number' 
let age: number;

// The age variable is then assigned a value
age = 18;

/*
This would throw an error because age is assigned to type 'number' not 'string' 
age = "eighteen";
*/

// newAge variable is explicitly assigned to type 'number' and assigned a value
let newAge: number = 21; 

// day variable is explicitly assigned to both types 'string' and 'number' 
let day: string | number;

day = "tenth"
day = 10;

/*
----------------------------------------
Arrays
* Arrays can only contain elements of the same type 
* Unless an array is assigned to have multiple types
*/

// The names array is assigned to 'string' elements and implicitly assigned to type 'string' 
let names = ['tim', 'sarah', 'john'];

names.push('tammy');

/*
This would throw an error because 80 is type 'number' not 'string' 
names.push(80);
*/

// The numbers array is explicitly assigned to accept 'number' elements
let numbers : number[];

numbers = [56, 90, 104];

// month array is explicitly assigned to both types 'string' and 'number' 
let month: (string | number)[]

month = ["january", 1, "march", 2];

/*
----------------------------------------
Objects
*/

// The user object implicitly defines the types for the username, age, and isAdmin properties
let user = {
    username: "johnsmith02",
    age: 30, 
    isAdmin: false,   
}

user.username = "johnsmith30";

/*
This would throw an error because user.isAdmin is implicitly assigned to the type 'boolean'  
user.isAdmin = "no";
*/

/*
This would throw an error because the phone key does not exist within the user object  
user.phone = "+12345678910";
*/

// The userObj object explicitly defines the types for the username, age, and isAdmin properties
// Note the use of a colon(:) rather than the assignment operator(=) and the properties ending in a semicolon(;)
let userObj : {
    username: string;
    age: number;
    isAdmin: boolean;
}

/*
This would throw an error because the isAdmin property is not defined  
userObj : {
    username: "john";
    age: 30;
}
*/

/*
This would throw an error because the phone key was not defined in userObj
userObj : {
    username: "john";
    age: 30;
    isAdmin: true;
    phone: "+12345678910";
}
*/

// The userObj2 object creates a conditional property for phone and explicitly assigns it to a 'string' type
let userObj2 : {
    username: string;
    age: number;
    isAdmin: boolean;
    phone?: string;
}

userObj2 = {
    username: "jane",
    age: 22,
    isAdmin: true,
    phone: "+12345678910"
}

/*
----------------------------------------
Any Type
* A variable declared without an explicit type or implicit value can hold any value (like a normal JavaScript variable)
* Variables without a declared type should be avoided in TypeScript
*/

// testVariable is declared and implicitly it can hold any value
let testVariable;

testVariable = 12;
testVariable = "hi";
testVariable = true;
testVariable = [1, 2, 3];
testVariable = {}

// anyVariable is declared and explicilty it can hold any value
let anyVariable: any;

// testArray is declared and explicilty it can hold elements of any type
let testArray : any[];
testArray = [1, 2, 3, "one", "two", "three", false, []];