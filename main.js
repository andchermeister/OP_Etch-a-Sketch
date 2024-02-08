function setBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    board_size = size * size

    for (let i = 0; i < board_size; i++) {
        let board_element = document.createElement('div')
        board_element.style.backgroundColor = "blue"
        board.insertAdjacentElement("beforeend", board_element)
    }
}

setBoard(16)




