const body = document.querySelector("body");

const container = document.querySelector(".container");
container.classList.add('grid');

const createDiv = (number) => {
    let totalBoxes = (number * number);
    for (let i = 0; i < totalBoxes; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
    };
}
createDiv(16);

//Button asks user for a number of boxes to change the container to when pressed.
const button = document.createElement('button');
body.prepend(button);
button.textContent = "Click me";

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

button.addEventListener('click', newGrid);