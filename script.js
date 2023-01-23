const container = document.querySelector('.gridContainer')
const button = document.querySelector('button')


button.addEventListener('click', () => {
    let windowSize = prompt("How Many Squares Do You Want Per Side", 32)
    if (windowSize < 101){
        createGrid(windowSize);
    }
    else {
        alert("Try inputting a number less than 100!")
    }
})


function createGrid(numberOfSquares) {
    container.replaceChildren();

    for (let i = 0; i < numberOfSquares; i++){
        const columns = document.createElement('div')
        columns.classList.add('columns')
        container.appendChild(columns)

        //Create grid squares by creating rows with in the columns
        for (let j = 0; j < numberOfSquares; j++){
            const rows = document.createElement('div')
            rows.classList.add('grid')
            rows.addEventListener("mouseover", () => {
                rows.classList.add('hover')
            })
            columns.appendChild(rows)
        }
        
    }
}

