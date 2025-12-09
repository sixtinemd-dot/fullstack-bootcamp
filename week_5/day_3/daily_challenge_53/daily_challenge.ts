// Daily Challenge: Type Guard with Union Types

// Description:
// Create a function handleData that processes an array of mixed types. The array can contain objects with different structures. Implement type guards to handle each type of object and perform specific operations based on their structure.

// Instructions:
// 1. Define the following types:

type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
}; 

// 2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:
// For User objects, return a greeting message with the user’s name and age.
// For Product objects, return a message with the product ID and its price.
// For Order objects, return a summary of the order with its ID and amount.

// 3. Ensure your function handles unexpected cases gracefully.

type Data = User | Product | Order

function handleData(array: Data[]): string[] {

    let results: string[] = []
    for (const item of array) {

        if (item.type === "user") {
            results.push(`User: Name: ${item.name}, Age: ${item.age}`)
        } else if (item.type === "product") {
            results.push(`Product: ID: ${item.id}, Price: ${item.price}`)
        } else if (item.type === "order") {
            results.push(`Order summary: ID: ${item.orderId}, Amount: ${item.amount}`)
        } else {
            results.push("unexpected case.")
        }
    }
    return results
}

const testData: Data[] = [
    {type: 'user', name: "Sixtine", age: 17},
    {type: 'product', id: 123123, price: 4.99},
    {type: 'order', orderId: "ABC", amount: 3}
]

console.log(handleData(testData))




