const sketchPad = document.querySelector('.sketchPad')
const button = document.querySelector('.setGrid')

createBoard(16)

function createBoard(size) {
    let board = [];

    for (let row = 1; row <= size; row++){
        board[row] = []
        const boardRow = document.createElement('div');
        boardRow.classList.add(`row`)
        sketchPad.append(boardRow)

        for (let column = 1; column <= size; column++){
            board[row][column] = column
            const square = document.createElement('div');
            square.addEventListener('mouseover', (event)=>{
                event.target.id = 'fill'
            })
            boardRow.append(square)
        }
    }
}


function removeSquares(){
    while (sketchPad.hasChildNodes()){
        sketchPad.removeChild(sketchPad.firstChild)
    }
}

button.addEventListener('click', () => {
    let squares = prompt('Grid Size?' , 1)
    removeSquares()
    createBoard(squares)
})
