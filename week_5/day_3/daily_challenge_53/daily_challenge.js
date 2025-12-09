// Daily Challenge: Type Guard with Union Types
function handleData(array) {
    var results = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (item.type === "user") {
            results.push("User: Name: ".concat(item.name, ", Age: ").concat(item.age));
        }
        else if (item.type === "product") {
            results.push("Product: ID: ".concat(item.id, ", Price: ").concat(item.price));
        }
        else if (item.type === "order") {
            results.push("Order summary: ID: ".concat(item.orderId, ", Amount: ").concat(item.amount));
        }
        else {
            results.push("unexpected case.");
        }
    }
    return results;
}
var testData = [
    { type: 'user', name: "Sixtine", age: 17 },
    { type: 'product', id: 123123, price: 4.99 },
    { type: 'order', orderId: "ABC", amount: 3 }
];
console.log(handleData(testData));
