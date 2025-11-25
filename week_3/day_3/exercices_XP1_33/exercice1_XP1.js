// Exercise 1 : Change the article
// Instructions

// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.getElementsByTagName('h1')[0]
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.

let article = document.getElementsByTagName('article')[0]
let lastp = article.lastElementChild
article.removeChild(lastp)

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2 = document.getElementsByTagName('h2')[0]
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red"
})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.getElementsByTagName('h3')[0]
h3.addEventListener("click", () => {
    h3.style.display = "none"
})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold
let button = document.getElementById('makeBold')
button.addEventListener("click", () => {
    let par = document.getElementsByTagName('p')
    for (let p of par) {
        p.style.fontWeight = "bold"
    }
})