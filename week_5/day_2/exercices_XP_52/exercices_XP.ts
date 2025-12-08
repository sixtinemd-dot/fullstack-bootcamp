// Exercise 1: Class with Access Modifiers

// Instructions:
// Create a class Employee with the following properties:
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. Create a public method getEmployeeInfo that returns the employee’s name and position.

class Employee {
    private name: string
    private salary: number
    public position: string
    protected department: string

    constructor(name: string, salary: number, position: string, departement: string) {
        this.name = name
        this.salary = salary
        this.position = position
        this.department = departement
    }

    getEmplyeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`
    }
}

// Exercise 2: Readonly Properties in a Class
// What You Will Learn:

// Instructions:
// Create a class Product with the following properties:
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product {
    readonly id: number
    public name: string
    public price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price

    }

    getProductInfo(): string {
        return `Product's name: ${this.name}, Price: ${this.price}`
    }
}

let product = new Product(123, "Laptop", 1200)
// product.id = 5

// Exercise 3: Class Inheritance

// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string. Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). Create an instance of the Dog class and call the makeSound method.

class Animal {
    public name: string

    constructor(name: string) {
        this.name = name
    }

    makeSound(sound: string): string {
        return `${this.name} goes ${sound}`
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }

    makeSound(): string {
        return `${this.name} goes bark`
    }
}

const dog = new Dog("Max")
console.log(dog.makeSound())

// Exercise 4: Static Properties and Methods

// Instructions:
// Create a class Calculator with the following static methods:
// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.

class Calculator {
    public static add(a: number, b: number): number {
        return a + b
    }

    public static subtract(a: number, b: number): number {
        return a - b
    }
}

console.log(Calculator.add(1, 4))
console.log(Calculator.subtract(16, 10))

// Exercise 5: Extending Interfaces with Optional and Readonly Properties

// Instructions:
// Create an interface User with properties id (readonly), name, and email. Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel. Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

interface User {
    readonly id: number
    name: string
    email: string
}

interface PremiumUser extends User {
    membershipLevel?: string
}

function printUserDetails(User: PremiumUser): void {
    if (User.membershipLevel) {
        console.log(`Id: ${User.id}, name: ${User.name}, email: ${User.name}, memebership: ${User.membershipLevel}`)
    } else {
        console.log(`Id: ${User.id}, name: ${User.name}, email: ${User.name}`)
    }
}

const premiumUser: PremiumUser = {
    id: 123,
    name: "Sixtine",
    email: "sixtine@example.com",
    membershipLevel: "Premium"
}

printUserDetails(premiumUser)
