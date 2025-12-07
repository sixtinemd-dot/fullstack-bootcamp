let person: string = "John"
let age: number= 30

console.log(`Name :${person}, Age: ${age}`)

function greet(name: string): string {
    return `Welcome ${name}!`
}

console.log(greet("Sixtine"))
console.log(greet("Nathan"))
console.log(greet("Agustin"))


// 1. Type Inference: Create a variable greeting with a string value and let TypeScript infer its type.
let greeting = "Hello"

// 2. Type Annotations: Create a function subtract that takes two numbers as arguments and returns their difference. Use type annotations for both the parameters and the return type.
function substract(x: number, y: number): number {
    return x - y
}

// Bonus: Try changing the inferred type variable to a different type (e.g., assign a number to greeting) and observe the TypeScript error
// greeting = 2