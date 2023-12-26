/*
INTERFACES & TYPE ALIASES PT1
----------------------------------------
SUMMARY
* Interfaces are a way to define a certain structure that other data structures can adhere to.
* To create an interface use the interface keyword and capitalize the first letter of the interface (pascal case).
* Interfaces can be assigned as a type to a variable like a string, number, boolean, etc. 
* Define a new type alias using the type keyword, the name of the alias, and the assignment operator
*/

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {
    name: 'Rachel Smythe',
    avatar: './img/authors/rachel-smythe.png'
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}
// Interfaces can be used as types within other interfaces

const newPost: Post = {
    title: 'My New Post',
    body: 'Fill in later...',
    tags: ['new', 'interesting', 'writing'],
    create_at: new Date(),
    author: authorOne
}
// The value for the Author type must adhere to the Author interface

const secondPost = {
    title: 'My New Book',
    body: 'Some stuff about my new book...',
    tags: ['book', 'new', 'summer'],
    create_at: new Date(),
    author: authorOne
}
// The secondPost variable is implicitly inferred by TypeScript as a Post interface type because it adheres to the types format

function createPost(post: Post): void {
    console.log(`Created post ${post.title} by ${post.author.name}.`)
}
// The createPost function only accepts values adhering to the Post interface type and it doesn't return anything hence the void

createPost(newPost);
// Returns Created post My New Post by Rachel Smythe.

let posts: Post[] = []
// The posts variable is an array type that can only contain values adhering to the Post interface type

// TYPE ALIASES
 
type RGB = [number, number, number]
 // The type alias RGB is assigned to a tuple that requires three number values

function getRandomColor(): RGB {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}
 // The getRandomColor function must return the RGB type which must be a tuple containing three number values

 const colorOne = getRandomColor();
 const colorTwo = getRandomColor();

 console.log(colorOne, colorTwo)
 // Prints two tuples that align with the RGB type alias 

 type User = {
    name: string
    score: number
 }
 // The type alias defines the User object literal that requires a name that's a string type and a score of a number type

 const userOne: User = {
    name: 'Ben',
    score: 30
 }
 // The userOne variable is set to align to the User type meaning it requires the two defined properties and can have no others

 function formatUser(user: User) {
    console.log(`Welcome back ${user.name}! Your current score is ${user.score}`);
 }
 // The formatUser function accepts a user parameter that must align to the User type alias 

 formatUser(userOne);
// Returns Welcome back Ben! Your current score is 30

 formatUser({name: 'Nick', score: 45})
 // Returns Welcome back Nick! Your current score is 45