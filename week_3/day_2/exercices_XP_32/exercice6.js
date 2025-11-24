// Exercise 6 : Change the navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let div = document.getElementById("navBar")
div.setAttribute("id", "socialNetworkNavigation")

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let ul = document.getElementsByTagName("ul")[0]
let newLi = document.createElement("li")

// Create a new text node with “Logout” as its specified text.
let newText = document.createTextNode("Logout")

// Append the text node to the newly created list node (<li>).
newLi.appendChild(newText)

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
ul.appendChild(newLi)

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

let first = ul.firstElementChild
let last = ul.lastElementChild

console.log(first.textContent)
console.log(last.textContent)