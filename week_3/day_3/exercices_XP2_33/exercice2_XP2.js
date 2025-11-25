// Exercise 2 : Move the box
// Instructions

// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

let container = document.getElementById("container")
let box = document.getElementById("animate")
let button = document.getElementsByTagName("button")[0]

let interval;

function animate() {

    let left = parseInt(box.style.left) || 0
    left += 1
    box.style.left = left + "px"

    if (left >= 350 ) {
        clearInterval(interval)
    }

}

button.addEventListener("click", function (e) {
    e.preventDefault()
    interval = setInterval(animate,1)
})



