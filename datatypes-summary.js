// Notes of Datatypes:- 

//  two types of datatypes-
// 1. Primitive 
// 2. Non- Primitive or Reference 

// 7 types of Primitive Datatypes-
// string, Number, Boolean, null, Undefined, Symbol, BigInt


// Is Javascript Statically type or Dynamically type?
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmailId = undefined

const id = Symbol ('123')
const anotherId = Symbol ('123')
// console.log( id === anotherId);

const bigNumber = 354864545444144565n // (this line example of BigInt)

// Reference type (Non- Primitive)-
// Array, objects, functions

const xyz = ["abc", "bdc"]; // These are the example of array we write array in big brackets.

let myObj = {           // These are example of object
    name: "Ritika",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}
console.log(typeof scoreValue);


