// // Exercise 1 : Scope
// // Instructions
// // Analyse the code below, and predict what will be the value of a in all the following functions.
// // Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
//     // it will alert "inside the funcOne function 3". Because the function changes a's value according to an if statement.
// // #1.2 What will happen if the variable is declared with const instead of let ? 
//     // it will return an error, because a const can't change value

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
//     // it'll alert: "inside the funcThree function 0" because that's the variable of the global scope
// funcTwo()
//     // it'll change the value of a to 5
// funcThree()
//     // it'll alert: "inside the funcThree function 5" because the variable a has changed value.
// // #2.2 What will happen if the variable is declared with const instead of let ?
//     // it will return an error, because a const can't change value

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
//     // makes a's value of 'hello'
// funcFive()
//     // alerts "inside the funcFive function hello"

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
//     // it will alert "inside the funcSix function test" because that's what the function does
// // #4.2 What will happen if the variable is declared with const instead of let ?
//     // it will return an error, because a const can't change value

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
    // it will alert in the if block 5, but: outside of the if block 2 becuase it can't see the variable inside the curly braces
// #5.2 What will happen if the variable is declared with const instead of let ?
    // it will return an error, because a const can't change value


// Exercise 2 : Ternary operator
// Instructions
// Using the code below:

function winBattle(){
    return true;
}

// Transform the winBattle() function to an arrow function.
const winBattle = () => {
    return true
}

// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

let experiencePoints = (winBattle() ? 10 : 1)
console.log(experiencePoints)

// Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

const checkString = arg => (typeof arg === 'string' ? true : false)

// Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (x, y) => x + y

// Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
function weightConvert1(kg) {
    return kg * 1000 + "gr"
}
console.log(weightConvert1(2))

// Then, use function expression and invoke it.
const weightConvert2 = function (kg) {
    return kg * 1000 + "gr"
}
console.log(weightConvert2(2))

// Write in a one line comment, the difference between function declaration and function expression.
    // A function decleration is defined with function and is hoisted, and an expression is a variable and is'nt hoisted
// Finally, use a one line arrow function and invoke it.
const weightConvert3 = kg => kg * 1000 + "gr"
weightConvert3(2)

// Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (children, name, location, job) {
    return `You will be a ${job} in ${location}, and married to ${name} with ${children} kids.`
})(4, "Solal", "Tel-Aviv", "farmer")

// Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice (size) {
    let ingredients = []
    function addIngredients (ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3)
    }

    function displayJuice () {
         console.log(`The client wants a ${size} juice, containing ${ingredients.join(", ")}.`)
    }
    addIngredients("banana", "kiwi", "mango")
    addIngredients("apple", "raspberry", "pineapple")

    displayJuice()
}

makeJuice ("small") 