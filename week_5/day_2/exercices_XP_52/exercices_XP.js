// Exercise 1: Class with Access Modifiers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Instructions:
// Create a class Employee with the following properties:
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. Create a public method getEmployeeInfo that returns the employee’s name and position.
var Employee = /** @class */ (function () {
    function Employee(name, salary, position, departement) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = departement;
    }
    Employee.prototype.getEmplyeeInfo = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position);
    };
    return Employee;
}());
// Exercise 2: Readonly Properties in a Class
// What You Will Learn:
// Instructions:
// Create a class Product with the following properties:
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "Product's name: ".concat(this.name, ", Price: ").concat(this.price);
    };
    return Product;
}());
var product = new Product(123, "Laptop", 1200);
// product.id = 5
// Exercise 3: Class Inheritance
// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string. Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). Create an instance of the Dog class and call the makeSound method.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function (sound) {
        return "".concat(this.name, " goes ").concat(sound);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        return "".concat(this.name, " goes bark");
    };
    return Dog;
}(Animal));
var dog = new Dog("Max");
console.log(dog.makeSound());
// Exercise 4: Static Properties and Methods
// Instructions:
// Create a class Calculator with the following static methods:
// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
console.log(Calculator.add(1, 4));
console.log(Calculator.subtract(16, 10));
function printUserDetails(User) {
    if (User.membershipLevel) {
        console.log("Id: ".concat(User.id, ", name: ").concat(User.name, ", email: ").concat(User.name, ", memebership: ").concat(User.membershipLevel));
    }
    else {
        console.log("Id: ".concat(User.id, ", name: ").concat(User.name, ", email: ").concat(User.name));
    }
}
var premiumUser = {
    id: 123,
    name: "Sixtine",
    email: "sixtine@example.com",
    membershipLevel: "Premium"
};
printUserDetails(premiumUser);
