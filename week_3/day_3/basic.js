// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

function insertRow() {
    const table = document.getElementById('sampleTable')

    const newRow = table.insertRow(-1)

    const cell1 = newRow.insertCell(0)
    const cell2 = newRow.insertCell(1)

    // optional:
    const size = table.rows.length

    cell1.textContent = `Row${size} cell1`  
    cell2.textContent = `Row${size} cell2`  
}

// ex 2: button:

const btn = document.getElementById('jsstyle')