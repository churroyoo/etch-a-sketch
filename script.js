const sketchPad = document.querySelector('.sketchPad')
const max = 16;

for (let divCount = 0; divCount < max; divCount++){
    let containers = document.createElement('div');
    containers.addEventListener('mouseover', (event)=>{
        event.target.id = 'fill'
        console.log("hovered")
    })
    sketchPad.append(containers)
}