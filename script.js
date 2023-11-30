const sketchPad = document.querySelector('.sketchPad')
const button = document.querySelector('.setGrid')

createBoard(16)

function createBoard(squares) {
    for (let divCount = 0; divCount < squares; divCount++){
        let containers = document.createElement('div');
        containers.addEventListener('mouseover', (event)=>{
            event.target.id = 'fill'
            console.log("hovered")
        })
        sketchPad.append(containers)
    }
}
function removeSquares(){
    while (sketchPad.hasChildNodes()){
        sketchPad.removeChild(sketchPad.firstChild)
    }
}

button.addEventListener('click', () => {
    let squares = prompt('How big?' , 1)
    removeSquares()
    createBoard(squares)
})
