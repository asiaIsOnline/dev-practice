"use strict";
/*
INTERFACES & TYPE ALIASES
----------------------------------------
SUMMARY
* Interfaces are a way to define a certain structure that other data structures can adhere to.
* To create an interface use the interface keyword and capitalize the first letter of the interface (pascal case).
* Interfaces can be assigned as a type to a variable like a string, number, boolean, etc.
*/
const authorOne = {
    name: 'Rachel Smythe',
    avatar: './img/authors/rachel-smythe.png'
};
// Interfaces can be used as types within other interfaces
const newPost = {
    title: 'My New Post',
    body: 'Fill in later...',
    tags: ['new', 'interesting', 'writing'],
    create_at: new Date(),
    author: authorOne
};
// The value for the Author type must adhere to the Author interface
const secondPost = {
    title: 'My New Book',
    body: 'Some stuff about my new book...',
    tags: ['book', 'new', 'summer'],
    create_at: new Date(),
    author: authorOne
};
// The secondPost variable is implicitly inferred by TypeScript as a Post interface type because it adheres to the types format
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}.`);
}
// The createPost function only accepts values adhering to the Post interface type and it doesn't return anything hence the void
createPost(newPost);
// Returns Created post My New Post by Rachel Smythe.
let posts = [];
// The posts variable is an array type that can only contain values adhering to the Post interface type
