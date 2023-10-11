/*
VARIABLES 
----------------------------------------
Basics
* Use variables to define strict types
* These variables will be restricted to the same type while coding
*/

// greeting variable is implicitly assigned to type 'string' because of the value it contains
let greeting = "hello";
greeting = "hi";

/*
This would throw an error because greeting is assigned to type 'string' not 'number' 
greeting = 18;
*/

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

let user = {
    username: "johnsmith02",
    age: 30, 
    isAdmin: false,   
}

user.username = "johnsmith30";

/*
This would throw an error because user.isAdmin is assigned to the type 'boolean'  
user.isAdmin = "no";
*/
