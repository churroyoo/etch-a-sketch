const sketchPad = document.querySelector('#sketchPad')
const max = 16;

for (let divCount = 0; divCount < max; divCount++){
    let containers = document.createElement('div');
    containers.addEventListener('hover', ()=>{
        
    })
    sketchPad.append(containers)
}