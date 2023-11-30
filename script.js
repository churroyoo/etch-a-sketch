const sketchPad = document.querySelector('.sketchPad')
const button = document.querySelector('.setGrid')

createBoard(16)

sketchPad.addEventListener('mouseover', (event)=>{
    console.log(event.target)
    if (event.target.className === 'square'){
        event.target.classList.add('fill')
        console.log(event.target)
    }
})

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
            square.classList.add('square')
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
    let squares = prompt('How big do you want each side? Max Size: 100' , 1)

    if (squares < 101){
        removeSquares()
        createBoard(squares)
    }else{
        alert("We can't build it that big!")
    }
})
