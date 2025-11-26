// Daily challenge: Groceries

// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit))
}

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    // No we won't, because user is a copy of the first client variable
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
    // Yes we will, because shopping and groceries are the same object
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
    // Yes we will, because shopping and groceries are the same object
// Invoke the cloneGroceries function.

const cloneGroceries = () => {
    let user = client
    client = "Betty"

    let shopping = groceries
    groceries.totalPrice = "35$"

    groceries.other.paid = false
}

cloneGroceries()

