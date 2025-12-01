// Daily challenge : HTML Form

// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

let form = document.getElementById("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let formName = document.getElementById("name").value
    let formLastname = document.getElementById("lastname").value

    let data = {name: formName, lastname: formLastname}
    let jsonData = JSON.stringify(data)

    let div = document.createElement("div")
    form.appendChild(div)
    div.textContent = jsonData
})

