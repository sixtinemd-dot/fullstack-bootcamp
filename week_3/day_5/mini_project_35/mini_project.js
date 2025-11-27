// create the empty grid

let grid = document.getElementById("grid")

const gridCols = 65
const gridRows = 65

for (let i = 0; i < gridRows * gridCols; i++) {
    let gridDiv = document.createElement("div")
    gridDiv.classList.add("gridDiv")
    grid.appendChild(gridDiv)
}

let gridDiv = document.createElement("div")


// create color selector

const sideBar = document.getElementById("sideBar")

const sideCols = 3
const sideRows = 8

const colors = [
  "none",
  "none",
  "none",
   // Reds
  "#e10b0bff", // dark red
  "#43AA8B", // dark green
  "#b56ff7ff", // light purple
  "#FF6B6B", // light red
  "#83ee31ff", // light green
  "#FF006E", // neon pink
  "#F77F00", // dark orange
  "#00BFA6", // bright teal
  "#FF85A2", // pastel pink
  "#FDBA74", // light orange
  "#7FDBFF", // pastel cyan
  "#6b4121ff", // brown
  "#F9C74F", // dark yellow
  "#277DA1", // dark blue  
  "#a78956ff", // lighter brown
  "#2323f5ff", // electric blue
  "#0f6515ff", // dark green
  "#6C757D", // grey
  "#FFFFFF",  // white
  "#7209B7", // dark purple  
  "#000000", // black
  
]
for (let i = 0; i < sideRows * sideCols; i++) {
    let sideColor = document.createElement("div")

    sideColor.style.backgroundColor = colors[i]

    if (i < 3) {
        sideColor.classList.add("emptyColorBox")
    } else {
        sideColor.classList.add("colorBox")
    }

    sideBar.appendChild(sideColor)
}

// color the cells
// 1. select the color

let selectedColor = null
let isMouseDown = false
let selectedIcon = null

let sideColors = document.getElementsByClassName("colorBox")

for (let box of sideColors) {
    box.addEventListener("click", () => {
        selectedColor = box.style.backgroundColor
         if (selectedIcon) selectedIcon.remove()
        selectedIcon = document.createElement("img")
        selectedIcon.id = "selectedIcon"
        selectedIcon.src = "https://static.thenounproject.com/png/443154-200.png"
        selectedIcon.style.width = "30px"
        selectedIcon.style.height = "30px"
        box.appendChild(selectedIcon)

    })
}

// 2. color the cells

let gridCells = document.getElementsByClassName("gridDiv")

document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);

// click and drag the color in the cells

for (let cell of gridCells) {
    cell.addEventListener("mouseover", () => {
        if (selectedColor && isMouseDown) {
            cell.style.backgroundColor = selectedColor
        }
    })

    cell.addEventListener("click", () => {
        if (selectedColor) {
            cell.style.backgroundColor = selectedColor;
        }
    });
}

// clear the cells

const clearButton = document.getElementById("button")
clearButton.addEventListener("click", () => {
    if (selectedIcon) selectedIcon.remove()
    for(let cell of gridCells) {
         cell.style.backgroundColor = "white"
    }
})




