const body = document.querySelector("body");
const buttonContainer = document.querySelector(".buttoncontainer");

const container = document.querySelector(".container");
container.classList.add('grid');

let mode = 1;

const createDiv = (number) => {
    let totalBoxes = (number * number);
    for (let i = 0; i < totalBoxes; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);

        switch (mode) {
            case (2):
                div.addEventListener('mouseover', () => {
                    div.style.backgroundColor = color();
                })
            break;

            default:
                div.addEventListener('mouseover', () => {
                    div.style.backgroundColor = "black";
                })
            break;
        }
    }            
}
createDiv(16);

//Button asks user for a number of boxes to change the container to when pressed.
const squareButton = document.createElement('button');
buttonContainer.appendChild(squareButton);
squareButton.textContent = "Squares";

function userPrompt() {
    let number = prompt("Enter a number between 1 and 100");
    while (number < 1 || number > 100 || number === NaN) {
        number = prompt("Invalid number. Enter a number between 1 and 100");
    }
    return number;
}

const newGrid = () => {
    let number = userPrompt();

    container.replaceChildren();
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    
    createDiv(number);
}

squareButton.addEventListener('click', newGrid);

//Party mode changes divs background colors to random. Boring mode changes divs bg color back to black.
const partyButton = document.createElement('button');
buttonContainer.prepend(partyButton);
partyButton.textContent = "Party Mode";

partyButton.addEventListener('click', () => {
    mode = 2;
    newGrid();
});


const boringButton = document.createElement('button');
buttonContainer.prepend(boringButton);
boringButton.textContent = "Boring Mode";

boringButton.addEventListener('click', () => {
    mode = 1;
    newGrid();
});

//Creates random color for mouseover event listener
function color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}