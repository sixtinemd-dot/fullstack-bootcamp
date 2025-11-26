// Daily challenge: Tell the story

// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.

let form = document.getElementById('libform')

form.addEventListener('submit', function (e) {

  e.preventDefault()

  let noun = document.getElementById('noun').value
  let adj = document.getElementById('adjective').value
  let person = document.getElementById('person').value
  let verb = document.getElementById('verb').value
  let place = document.getElementById('place').value

  // make a story
  let story = `The other day, I saw ${person} playing with a very ${adj} ${noun}. I found this weird and so I started ${verb} and went far far away to ${place}.`

  let span = document.getElementById('story')
  span.textContent = story
})