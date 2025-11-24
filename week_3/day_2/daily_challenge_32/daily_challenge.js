// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

backgroundColor = {
    "Mercury" : "gray", 
    "Venus" : "gold", 
    "Earth" : "dodgerblue", 
    "Mars" : "firebrick",
    "Jupiter" : "orange", 
    "Saturn" : "purple", 
    "Uranus" : "lightblue", 
    "Neptune" : "darkblue"
}

let section = document.querySelector(".listPlanets")

for(let item of planets) {
     let planet = document.createElement("div")
     planet.classList.add("planet")
     planet.style.backgroundColor = backgroundColor[item]
     planet.textContent = item
     section.appendChild(planet)
}


