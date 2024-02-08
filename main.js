let board = document.querySelector(".board");
let color = "black"
let click = true

function setBoard(size) {

    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    board_size = size * size

    for (let i = 0; i < board_size; i++) {
        let board_element = document.createElement('div')
        board_element.style.backgroundColor = "white"
        board_element.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", board_element)
    }


}

setBoard(16)

function setBoardSize(input) {
    if (input >= 4 && input <= 100) {
        setBoard(input)
    } else {
        alert("Size of board is inappropriate! Try again.")
    }
}

function colorDiv() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
        } else {
            this.style.backgroundColor = color
        }
    }
}

function changeColor(choice) {
    color = choice
}

function reset() {
    let board_elements = document.querySelectorAll('div')
    board_elements.forEach((div) => div.style.backgroundColor = "white")
}

document.querySelector('body').addEventListener('click', () => {
    click = !click
    if (click) {
        document.querySelector('.mode').textContent = "Mode: Coloring"
    } else {
        document.querySelector('.mode').textContent = "Mode: Not coloring"
    }
    
})






