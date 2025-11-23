// Exercise 1 : List of people
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays
let people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.splice(0, 1)
console.log(people)

// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason")
console.log(people)

// Write code to add your name to the end of the people array.
people.push("Sixtine")
console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let peopleSliced = people.slice(1, 3)
console.log(peopleSliced)

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")) // because "Foo" does not exist in people

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people.lastIndexOf("Sixtine")
console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let person of people) {
        console.log(person);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let i in people) {
    console.log(people[i]);
    if (people[i] == "Devon") {
        break;
    }
}

// Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ["pink", "blue", "yellow", "orange", "black"]

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
userNum = prompt("Enter a number")
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
console.log(typeof(userNum))
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
do
{
    userNum = prompt("Enter a number")
}
while (userNum < 10)

// Exercise 4 : Building Management
// Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("tenant name: " + building.nameOfTenants[1] + ", number of rooms: " + building.numberOfRoomsAndRent.dan[0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let saraDavidRentSum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
if (saraDavidRentSum > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] += 1200
}

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
    1: "mom",
    2: "dad",
    3: "brother",
    4: "sister"
}

// Using a for in loop, console.log the keys of the object.
for (let x in family) {
  console.log(x) // keys
}
// Using a for in loop, console.log the values of the object.
for (let x in family) {
  console.log(family[x]) // values
}

// Exercise 6 : Rudolf
// Instructions
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence);

// Exercise 7 : Secret Group
// Instructions
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let societyName = "";

for (n of names) {
    societyName += n[0]
}

societyNameSorted = societyName.split('').sort().join('');
console.log(societyNameSorted)
