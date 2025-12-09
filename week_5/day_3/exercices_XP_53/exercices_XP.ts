// Exercise 1: Intersection Types

// Task
// Define an intersection type PersonWithAddress that combines Person and Address types. Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city

interface Person {
    name: string
    age: number
}

interface Address {
    street: string
    city: string
}

type PersonWithAddress = Person & Address 

let person1: PersonWithAddress = {
    name: "Sixtine",
    age: 17,
    street: "Einstein",
    city: "Tel-Aviv"
} 

// Exercise 2: Type Guards with Union Types

// Task
// Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:
// "This is a number" for numbers.
// "This is a string" for strings.

type alphanumeric = number | string

function describeValue(input: alphanumeric): string {
    if (typeof input === "number") {
        return "This is a number"
    } else {
        return "This is a string"
    }
}

console.log(describeValue(16))
console.log(describeValue("Sixtine"))

// Exercise 3: Type Casting

// Task
// Create a variable someValue of type any and cast it to a string. Then, use it as a string.
let someValue: any = 16
let strValue = someValue as string

console.log(strValue)

// Exercise 4: Type Assertions with Union Types

// Task
// Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string. Test with arrays of mixed types.

function getFirstElement(array: alphanumeric[]) {
    let first = array[0]
    return first as string
}

let array1 = [16, "16", "sixt"]
let array2 = ["Sixtine", 123, 456]

console.log(getFirstElement(array1))
console.log(getFirstElement(array2))


// Exercise 5: Generic Constraints

// Task
// Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array). The function should log the length.
function logLength<T extends {length: number}>(element: T): void {
    console.log(`Length of the element: ${element.length}`)
}

logLength("Sixtine")
logLength("HI")
logLength([1, 2, 3])

// Exercise 6: Intersection Types and Type Guards

// Task
// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

interface Job {
    position: string
    departement: string
}

type Employee = Person & Job

function describeEmployee(employee: Employee): string {
    if (employee.position.toLowerCase() === "manager") {
        return `${employee.name} is a manager`
    } else if (employee.position.toLowerCase() === "developper") {
        return `${employee.name} is a developper`
    } else {
        return `${employee.name} isn't a manager or a developper`
    }
}

const employee1: Employee = {
    name: "Sixtine",
    age: 17,
    position: "Developper",
    departement: "Fashion"
}

console.log(describeEmployee(employee1))

// Exercise 7: Type Assertions and Generic Constraints

// Task
// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.

function formatInput<T extends {toString(): string}>(input: T): string {
    let text = input.toString() as string
    return `Format: ${text}`
} 

console.log(formatInput(5))
console.log(formatInput("Hello"))
console.log(formatInput([1, 2, 3]))
console.log(formatInput(false))
