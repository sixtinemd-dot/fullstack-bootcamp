// Exercise 1: Intersection Types
var person1 = {
    name: "Sixtine",
    age: 17,
    street: "Einstein",
    city: "Tel-Aviv"
};
function describeValue(input) {
    if (typeof input === "number") {
        return "This is a number";
    }
    else {
        return "This is a string";
    }
}
console.log(describeValue(16));
console.log(describeValue("Sixtine"));
// Exercise 3: Type Casting
// Task
// Create a variable someValue of type any and cast it to a string. Then, use it as a string.
var someValue = 16;
var strValue = someValue;
console.log(strValue);
// Exercise 4: Type Assertions with Union Types
// Task
// Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string. Test with arrays of mixed types.
function getFirstElement(array) {
    var first = array[0];
    return first;
}
var array1 = [16, "16", "sixt"];
var array2 = ["Sixtine", 123, 456];
console.log(getFirstElement(array1));
console.log(getFirstElement(array2));
// Exercise 5: Generic Constraints
// Task
// Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array). The function should log the length.
function logLength(element) {
    console.log("Length of the element: ".concat(element.length));
}
logLength("Sixtine");
logLength("HI");
logLength([1, 2, 3]);
function describeEmployee(employee) {
    if (employee.position.toLowerCase() === "manager") {
        return "".concat(employee.name, " is a manager");
    }
    else if (employee.position.toLowerCase() === "developper") {
        return "".concat(employee.name, " is a developper");
    }
    else {
        return "".concat(employee.name, " isn't a manager or a developper");
    }
}
var employee1 = {
    name: "Sixtine",
    age: 17,
    position: "Developper",
    departement: "Fashion"
};
console.log(describeEmployee(employee1));
// Exercise 7: Type Assertions and Generic Constraints
// Task
// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.
function formatInput(input) {
    var text = input.toString();
    return "Format: ".concat(text);
}
console.log(formatInput(5));
console.log(formatInput("Hello"));
console.log(formatInput([1, 2, 3]));
console.log(formatInput(false));
