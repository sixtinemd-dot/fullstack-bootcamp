

// Save habits
function saveHabits(habits) {
    localStorage.setItem("habits", JSON.stringify(habits))
}

// Load habits
function loadHabits() {
    return JSON.parse(localStorage.getItem("habits")) || []
}

let habits = loadHabits()

// start


let option1 = document.getElementById("habitInputDiv")
let option2 = document.getElementById("habitChooseDiv")

function start() {
    if (option1) option1.style.display = "none"
    if (option2) option2.style.display = "none"
}

start()

const habitInput = document.getElementById("habitInput")
const habitChoose = document.getElementById("habitChoose")


function chooseOption() {

    if (habitChoose && habitInput) habitInput.addEventListener("click", () => {

        // make the option 2 non-selectable
        habitInput.classList.add("activeButton")
        habitChoose.classList.remove("activeButton")

        option1.style.display = "block"
        option2.style.display = "none"

    })

    if (habitChoose && habitInput) habitChoose.addEventListener("click", () => {

        // make the option 1 non-selectable
        habitChoose.classList.add("activeButton")
        habitInput.classList.remove("activeButton")

        option2.style.display = "block"
        option1.style.display = "none"

        loadHabitCategories()
    })
}
chooseOption()

// add an input habit

const addButton1 = document.getElementById("addButton1")
let input = document.getElementById("input")

if (addButton1) addButton1.addEventListener("click", () => {
    const text = input.value.trim()
    if (!text) return

    habits.push({ text: text, stage: "todo" })
    saveHabits(habits)
    displayBoard()
    input.value = ""
    option1.style.display = "none"

    alert("Habit added successfully!")
})

// add a predefined habit

let habitCategories = document.getElementById("habitCategories")
let habitOptions = document.getElementById("habitOptions")

let selectedCategoryIndex = null
let selectedOption = null

// Habit data
const optionsToChoose = [
    {
        habit: "Drink water",
        icon: "💧",
        options: ["5 glasses", "10 glasses", "1L", "2L"]
    },
    {
        habit: "Exercise",
        icon: "🏃‍♂️",
        options: ["10 minutes", "20 minutes", "30 minutes", "1 hour"]
    },
    {
        habit: "Home care",
        icon: "🌱",
        options: ["Water the plants", "Clean bedroom", "Do laundry", "Do the dishes"]
    },
    {
        habit: "Go Outside",
        icon: "🌤",
        options: ["5 minutes", "10 minutes", "30 minutes", "1 hour"]
    },
    {
        habit: "Socialize",
        icon: "👥",
        options: ["Call family", "See a friend", "Catch up with a friend", "Go to a social event"]
    },
    {
        habit: "Eat",
        icon: "🥑",
        options: ["Go out for lunch", "Cook dinner", "Have a sweet treat", "Eat with someone"]
    }
]

// Load category buttons

function loadHabitCategories() {
habitCategories.innerHTML = "" 
optionsToChoose.forEach((habit, index) => {
    const categorieButton = document.createElement("button")
    categorieButton.classList.add("categoryButton")
    categorieButton.textContent = `${habit.icon} ${habit.habit}`

    habitCategories.appendChild(categorieButton)

    categorieButton.addEventListener("click", () => {
        document.querySelectorAll(".categoryButton")
            .forEach(btn => btn.classList.remove("selectedCategory"))

        categorieButton.classList.add("selectedCategory")
           
        loadHabitOptions(index)
    })

})
}

// Load options for category
function loadHabitOptions(index) {

    selectedCategoryIndex = index
    selectedOption = null

    habitOptions.innerHTML = "" //clear other

    let selectedHabit = optionsToChoose[index]

    //select an option from the category
    selectedHabit.options.forEach(option => {
        const optionButton = document.createElement("button")
        optionButton.textContent = option
        optionButton.classList.add("habitOptionButton")

        habitOptions.appendChild(optionButton)

        optionButton.addEventListener("click", () => {
            selectedOption = option

            document.querySelectorAll(".habitOptionButton")
                    .forEach(b => b.classList.remove("selected"))
            
            optionButton.classList.add("selected")        
        })
    })

}

// Add selected predefined habit to TODO
const addButton2 = document.getElementById("addButton2")

if (addButton2) addButton2.addEventListener("click", () => {
    if (selectedCategoryIndex === null || selectedOption === null) {
        alert("Please choose a category and an option.")
        return
    }

    const habitName =
        `${optionsToChoose[selectedCategoryIndex].habit} — ${selectedOption}`

    habits.push({ text: habitName, stage: "todo" })

    saveHabits(habits)

    displayBoard()

    if (habitOptions) habitOptions.innerHTML = ""
    selectedCategoryIndex = null
    selectedOption = null
    if (option2) option2.style.display = "none"

    alert("Habit added successfully!")
})

// Habits display logic

const todoList = document.getElementById("todoList")
const progressList = document.getElementById("progressList")
const doneList = document.getElementById("doneList")

// Create habit card
function createHabitCard(habit, index) {
    const card = document.createElement("div")
    card.classList.add("habitCard")

    const p = document.createElement("p")
    p.textContent = habit.text

    const cardButtons = document.createElement("div")
    cardButtons.classList.add("cardButtons")

    const left = document.createElement("button")
    left.textContent = "←"
    left.classList.add("leftButton")
    left.addEventListener("click", () => moveCard(index, "left"))

    const right = document.createElement("button")
    right.textContent = "→"
    right.classList.add("rightButton")
    right.addEventListener("click", () => moveCard(index, "right"))

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("deleteButton")
    deleteButton.innerHTML = `<i class="fa-solid fa-trash" style="color: #343bf9;"></i>`

    deleteButton.addEventListener("click", () => {
        habits.splice(index, 1) // remove habit from array
        saveHabits(habits) // save updated array
        displayBoard()
    })

    cardButtons.appendChild(left)
    cardButtons.appendChild(right)
    cardButtons.appendChild(deleteButton)

    card.appendChild(p)
    card.appendChild(cardButtons)

    if (habit.stage === "todo" && todoList) todoList.appendChild(card);
    if (habit.stage === "progress" && progressList) progressList.appendChild(card);
    if (habit.stage === "done" && doneList) doneList.appendChild(card)
}

// Change a habit of column

function moveCard(index, direction) {
    let stage = habits[index].stage

    if (direction === "right") {
        if (stage === "todo") {
            stage =  "progress"
        } else if (stage === "progress") {
            stage = "done"
        } 
    }

    if (stage === "done") {
    const now = new Date()
    habits[index].completedDay =
        `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
}

    if (direction === "left") {
        if (stage === "done") {
            stage =  "progress"
        } else if (stage === "progress") {
            stage =  "todo"
        } 
    }
    
    habits[index].stage = stage // update stage
    saveHabits(habits) // save changes
    displayBoard()

    checkDaily() //for the daily streak

}


function displayBoard() {
    // Clear columns
    if (todoList) todoList.innerHTML = ""
    if (progressList) progressList.innerHTML = ""
    if (doneList) doneList.innerHTML = ""

    habits.forEach((habit, index) => {
        createHabitCard(habit, index)
    })
}

displayBoard()

// streaks logic

function saveStreak(streak) {
    localStorage.setItem("streak", JSON.stringify(streak))
}

function loadStreak() {
    return JSON.parse(localStorage.getItem("streak")) || {}
}

function generateCalendar() {
    const calendar = document.getElementById("calendar")
    const monthTitle = document.getElementById("monthTitle")
    if (!calendar) return  // do nothing if not on streak page

    const streak = loadStreak()

    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()

    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ]
    monthTitle.textContent = monthNames[month] + " " + year

    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    calendar.innerHTML = ""

    // empty boxes before 1st
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div")
        calendar.appendChild(empty)
    }

    // real days
    for (let day = 1; day <= daysInMonth; day++) {
        const box = document.createElement("div")
        box.classList.add("day")
        box.textContent = day

        const key = `${year}-${month+1}-${day}`

        // Count how many tasks were done on this day
        const tasksDone = habits.filter(h => h.completedDay === key).length

        const count = document.createElement("div")
        count.classList.add("taskCount")
        count.textContent = tasksDone > 0 ? `${tasksDone}✓` : ""
        box.appendChild(count)

        if (streak[key]) {
            box.classList.add("completed")
        }

        calendar.appendChild(box)
    }
}
generateCalendar()

function checkDaily() {
    const doneCount = habits.filter(h => h.stage === "done").length

    if (doneCount >= 5) {
        const streak = loadStreak()
        const now = new Date()
        const key = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`

        streak[key] = true
        saveStreak(streak)

        generateCalendar() 
    }
}

// for mood.html

const moodButtons = document.querySelectorAll(".mood")
const quoteButton = document.getElementById("quoteButton")
const quoteText = document.getElementById("quote")

let selectedMood = null


moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedMood = button.dataset.mood

    moodButtons.forEach(b => b.classList.remove("selected"))
    button.classList.add("selected")
  })
})

quoteButton.addEventListener("click", async () => {
  if (!selectedMood) {
    alert("Please choose a mood first")
    return
  }

  try {
      const res = await fetch("https://api.api-ninjas.com/v2/randomquotes?categories=inspirational,wisdom", {
        headers: { 'X-Api-Key': 'ueyYZCdeMB5iveHQvokK/g==Bt3B0KybEuz3bJpR' } 
      })
      const data = await res.json()
      
      quoteText.textContent = `${selectedMood}\n— "${data[0].quote}" — ${data[0].author}`
    } catch (error) {
      console.error("Error fetching quote:", error)
      quoteText.textContent = "Sorry, could not fetch a quote. Try again later."
    }
})

