// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:


let container = document.getElementById("container")
const button = document.getElementById("button")

function showLoading() {

    let loading = document.createElement("div")
    loading.classList.add("loading")
    container.appendChild(loading)
    loading.innerHTML = 
    '<i class="fa-solid fa-rotate fa-spin fa-2xl"></i><h4>Loading...</h4>'
   
}

function addChar(properties, home) {
    container.innerHTML=""

    let char = document.createElement("div")
    char.classList.add("infos")
    char.innerHTML =
    `<h2>${properties.name}</h2>

    <p>Height: ${properties.height}</p>
    <p>Gender: ${properties.gender}</p>
    <p>Birth Year: ${properties.birth_year}</p>
    <p>Home World: ${home}</p>
    </div>`

    container.appendChild(char)
}

button.addEventListener("click", () => {
    
    showLoading()

    let randomNum = Math.floor(Math.random() * 83) + 1
    let charUrl = `https://www.swapi.tech/api/people/${randomNum}`

    fetch(charUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error(`error!: ${response.status}`)
        }
        return response.json()
    })

    .then(data => {
    let properties = data.result.properties
    return Promise.all([
        properties,
        fetch(properties.homeworld) 
            .then(response => {
            if (!response.ok) {
            throw new Error(`error!: ${response.status}`)
        }
        return response.json()            
        })
    ])
    })
        
    .then(([properties, home]) => {
        addChar(properties, home.result.properties.name)
    })

    .catch(error => console.error("Something went wrong:", error))


})