//Задача 2.1

const table = document.getElementById("colorsTable")
generateTable(50, 20)

function generateTable(rows, lines) {
    for (let i = 0; i < lines; i++) {
        let tr = document.createElement('tr')

        for (let i = 0; i < rows; i++) {
            let td = document.createElement('td')
            td.classList.add("cell")
            tr.appendChild(td)
        }

        table.appendChild(tr)
    }
}

//set event handlers
table.addEventListener('mousedown', setCellIsClicked)
document.getElementById("changeColorsButton")
    .addEventListener('click', changeColorsHandler)

//event handlers
function setCellIsClicked(e) {
    const targetCell = e.target
    targetCell.classList.add("clickedCell")
    console.log(targetCell)
}

function changeColorsHandler() {
    if (table.classList.contains("whiteTable")) {
        table.classList.replace("whiteTable", "blackTable")
        return
    }
    table.classList.replace("blackTable", "whiteTable")
}



