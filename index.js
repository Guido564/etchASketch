console.log('Contexto global');
const container = document.getElementById('container');
const btnChange = document.querySelector('#btn-change');
const reset = document.querySelector('#reset');

boxCreation(10 * 10)
draw()
        
function boxCreation(num) {
    for (let i = 0; i < num; i++){
        let div = document.createElement('div')
        div.setAttribute('class', 'box');
        div.setAttribute('id', `div-${i}`);
        container.appendChild(div)
    }
    console.log('Creacion de las cajas')
}

function deleteGrid() {
    const sqr = document.querySelectorAll('.box')
    sqr.forEach(item => {
        container.removeChild(item);
    })
}

const cssVar = document.querySelector(':root')

btnChange.addEventListener('click', function boxCreationInput() {
    let squares = prompt('Please select the size of the canvas')
    
    if (squares < 101 && squares > 0) {
        resetCanvas()
        deleteGrid()
        cssVar.style.setProperty('--num-squares', Number(squares))
        boxCreation(Number(squares) * Number(squares))
        draw()
    } else {
        alert('Sorry, incorrect value')
    }
});

reset.addEventListener('click', resetCanvas)

function resetCanvas() {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
        box.style.cssText = 'background: white;';
    });
}

function draw() {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
        box.addEventListener('mousemove', () => {
            box.style.cssText = 'background: black;';
        });
    });
}