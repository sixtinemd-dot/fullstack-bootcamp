// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

let form = document.getElementById("form")
let input = document.getElementById("input")
const submit = document.getElementById("submit")
const deleteAllButton = document.getElementById("deleteAll")
let gifsContainer = document.getElementById("gifsContainer")

function addGif(gifUrl) {
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = gifUrl

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "DELETE GIF"

    div.appendChild(img)
    div.appendChild(document.createElement("br"))
    div.appendChild(deleteButton)

    gifsContainer.appendChild(div)

    deleteButton.addEventListener("click", () => div.remove())
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const url = `https://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(input.value)}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error!: ${response.status}`)
      }
      return response.json()
    })

    .then(data => {
      const gifUrl = data.data.images.fixed_height.url
      addGif(gifUrl)
    })
    .catch(error => console.error("Something went wrong:", error))
})

deleteAllButton.addEventListener("click", () => {
    gifsContainer.replaceChildren()
})

