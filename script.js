const container = document.querySelector('.gridContainer')
const button = document.querySelector('button')


button.addEventListener('click', () => {
    createGrid();
})


function createGrid() {
    for (let i = 0; i < 16; i++){
        const columns = document.createElement('div')
        columns.classList.add('columns')
        container.appendChild(columns)

        for (let i = 0; i < 16; i++){
            const rows = document.createElement('div')
            rows.classList.add('rows')
            columns.appendChild(rows)
        }
        
    }
}
