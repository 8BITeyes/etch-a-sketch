const body = document.querySelector("body");


const container = document.querySelector(".container");
container.classList.add('content');

let totalBoxes = 256;
for (let i = 0; i < totalBoxes; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
}

const boxes = container.querySelectorAll('div');
boxes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";
    });
});

//Asks user for a number of boxes to change the container to.
const button = document.createElement('button');
body.prepend(button);
button.textContent = "Click me";
button.addEventListener('click', () => {
    let number = prompt("How many squares per side?");
});