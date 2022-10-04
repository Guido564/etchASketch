console.log('Contexto global');
const container = document.getElementById('container');
const btnChange = document.querySelector('#btn-change');
const reset = document.querySelector('#reset');
let erase = document.querySelector('.erase');
let colorPalette = document.querySelector('.color-palette');
const colorSelection = document.getElementById('color-selection');
const sizeTitle = document.querySelector('.size');
let isDrawing = false;

colorPalette.checked = false;
erase.checked = false;

window.addEventListener('mousedown', (e) => {
    isDrawing = true;
    e.preventDefault();
});

window.addEventListener("mouseup", () => {
    isDrawing = false;
});

boxCreation(16 * 16);
draw();

function boxCreation(num) {
    for (let i = 0; i < num; i++){
        let div = document.createElement('div')
        div.setAttribute('class', 'box');
        div.setAttribute('id', `div-${i}`);
        container.appendChild(div);
        sizeTitle.textContent = `Actual Size: 16x16`
    }
    console.log('Creacion de las cajas');
}

function deleteGrid() {
    const sqr = document.querySelectorAll('.box');
    sqr.forEach(item => {
        container.removeChild(item);
    })
}

const cssVar = document.querySelector(':root');

btnChange.addEventListener('click', function boxCreationInput() {
    let squares = prompt('Please select the size of the canvas');

    if (squares < 101 && squares > 0) {
        resetCanvas();
        deleteGrid();
        cssVar.style.setProperty('--num-squares', Number(squares));
        boxCreation(Number(squares) * Number(squares));
        colorPalette.checked = false;
        erase.checked = false;
        sizeTitle.textContent = `Actual Size: ${squares}x${squares}`;
        draw();
    } else {
        alert('Sorry, incorrect value');
    }
});

reset.addEventListener('click', resetCanvas);

function resetCanvas() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.cssText = 'background: white;';
    });
}

function draw() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        if (isDrawing) {
            box.style.cssText = 'background: black;';
        }
        });
    });
}

colorPalette.addEventListener('click', drawByColor);

function drawByColor() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        if (isDrawing && colorPalette.checked) {
            box.style.cssText = `background: ${colorSelection.value};`;
        }
        });
    });
}

erase.addEventListener('click', eraseOneByOne);

function eraseOneByOne() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        if (isDrawing && erase.checked == true) {
            box.style.cssText = 'background: white;';
        }
        });
    });
}

erase.addEventListener('click', function() {
    if (colorPalette.checked) {
        colorPalette.checked = false;
    }
})

colorPalette.addEventListener('click', function() {
    if (erase.checked) {
        erase.checked = false;
    }
})