
const tasks = []

const taskForm = document.getElementById("form")
const submitButton = document.getElementById("button")
let input = document.getElementById("input")
let listTasks = document.querySelector(".listTasks")

function addTask (e) {

    e.preventDefault()

        textInput = input.value

        if (textInput === "") {
            return

        } else {
            tasks.push(textInput)
            const taskItem = document.createElement("div")
            listTasks.appendChild(taskItem)
            taskItem.classList.add("taskItem")

            const label = document.createElement("label")
            const checkbox = document.createElement("input")

            checkbox.type = "checkbox"
            checkbox.classList.add("checkBox")

            label.appendChild(checkbox)

            const taskTextNode = document.createTextNode(textInput)
            label.appendChild(taskTextNode)

            const deleteButton = document.createElement("i")
            deleteButton.classList.add("deleteButton")
            deleteButton.textContent = "X"

            deleteButton.addEventListener("click", () => {
        
                listTasks.removeChild(taskItem)
                const index = tasks.indexOf(textInput)
                if (index > -1) tasks.splice(index, 1)
            })

            taskItem.appendChild(label)
            taskItem.appendChild(deleteButton)

            input.value = ""
        }

}

taskForm.addEventListener("submit", addTask)