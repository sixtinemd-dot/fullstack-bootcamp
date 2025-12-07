//  Exercise 1: Hello, World! Program

// Instructions
// Create a TypeScript program that logs the message “Hello, World!” to the console.

const message: string = "Hello, World!"
console.log(message)

// Exercise 2: Type Annotations

// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.

let age: number = 17
let name_: string = "Sixtine"
console.log(`Name: ${name_}, Age: ${age}`)


// Exercise 3: Union Types

// Instructions
// Use union types to declare a variable id that can be either a string or a number.

let id: (number | string) = "Sixtine"


// Exercise 4: Control Flow with if...else

// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

function checkNum(num: number): string {
    if (num < 0) {
        return "The number is negative"
    } else if (num > 0) {
        return "The number is positive"
    } else {
        return "The number is 0."
    }
}

console.log(checkNum(10))
console.log(checkNum(-8))
console.log(checkNum(0))


// Exercise 5: Tuple Types

// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

function getDetails(fname: string, age: number): [string, number, string] {
    let message = `Hello ${fname}, you are ${age} years old!`
    return [fname, age, message]
}

console.log(getDetails("Sixtine", 17))

// Exercise 6: Object Type Annotations

// Instructions
// Define the Object Structure:
// Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).

type Person = {
    name: string,
    age: number
}

// Create the Function:
// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.

function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    }
}

// Test the Function:
// Test the createPerson function by creating a person and logging the result to the console.
const person1 = createPerson("Sixtine", 17)
console.log(person1)


// Exercise 8: switch Statement with Complex Conditions

// Instructions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.

function getAction(role: string): string {
    switch(role) {
        case "admin":
        case "director":
            return "full access"
        
        case "edithor":
        case "author":
            return "modification access"
        
        case "reader":
        case "subscriber":
            return "only viewing access"

        default:
            return "no access"
    }
}

console.log(getAction("subscriber"))
console.log(getAction("admin"))
console.log(getAction("random"))

// Exercise 9: Function Overloading with Default Parameters

// Instructions
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

function greet(): string
function greet(person: string): string
function greet(person?: string): string {
    if (person) {
        return `Hello ${person}`
    } else {
        return "Hello there"
        }
}

console.log(greet("Sixtine"))
console.log(greet())




