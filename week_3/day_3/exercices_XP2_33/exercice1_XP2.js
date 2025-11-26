// Exercise 1: Timer
// Instructions

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function sayHi() {
    alert("Hello World")
}

setTimeout(sayHi, 2000)

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let div = document.getElementById("container")
let button = document.getElementById("clear")

function newPar() {
    let par = document.createElement("p")
    par.textContent = "Hello World"
    div.appendChild(par)

    divLength = div.children.length

    if (divLength >= 5) {
        clearInterval(interval)
    }
}

setTimeout(newPar, 2000)

const interval = setInterval(newPar, 2000)

button.addEventListener("click", function (e) {
     
    e.preventDefault()

    clearInterval(interval)

})






