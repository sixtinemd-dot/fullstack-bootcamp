// Exercice 4 : Volume of a sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const form = document.getElementById("MyForm")

form.addEventListener("submit", function (e) {

    e.preventDefault()

    let radius = document.getElementById("radius").value
    let volume = (4/3) * Math.PI * (radius ** 3)

    document.getElementById("volume").value = volume


});