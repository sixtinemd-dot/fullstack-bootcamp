

let addressNumber = 55;
let addressStreet = 'chicken rd.';
let country = 'Madagascar';

console.log('I live at' + addressNumber + ' ' + addressStreet + ',' + country); 

let birthYear = 2008;
let futureYear = 2030;
let age = futureYear - birthYear;

console.log('I will be ' + age + ' in ' + futureYear);

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline". 

let myObj = {
    username: 'coolgirl',
    password: '12345'
};

let database = [myObj];

let newsfeed = [
    {username: '', timeline: ''},  
    {username: '', timeline: ''},
    {username: '', timeline: ''}
]

// if statements

let myNum = prompt("Pick a number");

if (myNum == 10) {
    alert("That is a good number");
} else if (myNum > 10) {
    alert("That is a big number");
} else {
    alert("That is a little number");
}

// for loops

for (let i = 0; i <= 15; i++){
    if (i%2 === 0){
        console.log(i + "is even");
    } else {
        console.log(i + "is odd");
    }
}

 
let addressNumberr = 55;
let addressStreett = 'chicken rd.';
let countryy = 'Madagascar';

console.log(`I live at ${addressNumberr} ${addressStreett}, ${countryy}.`); 