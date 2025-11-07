const container = document.querySelector('.container');
const box = document.createElement("div");
const sketchHeight = 400; // in px
const sketchWidth = 400; // in px
let boxPerRow = 16;
let boxWidth = sketchWidth / boxPerRow;
const penColor = "black"

box.style.flexBasis = `${boxWidth}px`;
box.style.flexGrow = "0";
box.style.flexShrink = "0"
box.style.border = "1px"
box.style.height = boxWidth + "px";
box.style.borderBlockColor = "black";
box.style.borderStyle = "solid";

function createSingleBox(){
    const newBox = box.cloneNode(true);
    container.appendChild(newBox);
}

function createNewSketchPad(){
    for(let i = 0; i < boxPerRow ** 2; i++){
        createSingleBox();
    }
}

function addDrawable(){
    const boxes = container.querySelectorAll("div");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = penColor;
        })
    })
}

function resetSketch(){
    const boxes = container.querySelectorAll("div");
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
    })
}

const resetButton = document.querySelector(".buttons > .reset");
resetButton.addEventListener("click", () => {
    resetSketch();
})

function resizeSketch(){
    const boxes = container.querySelectorAll("div");
    boxes.forEach((box) => {
        box.remove();
    })
    boxPerRow = prompt("How many boxes would you like per row");
    container.style.width = `${sketchWidth + 2 * boxPerRow}px`
    container.style.height = `${sketchHeight + 2 * boxPerRow}px`
    boxWidth = sketchWidth / boxPerRow;
    box.style.height = boxWidth + "px";
    box.style.flexBasis = `${boxWidth}px`;
    createNewSketchPad();
    addDrawable();
}

const resizeButton = document.querySelector(".buttons > .resize");
resizeButton.addEventListener("click", () => {
    resizeSketch();
})

createNewSketchPad();
addDrawable();

