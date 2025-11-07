const container = document.querySelector('.container');
const box = document.createElement("div");
const sketchWidth = 400; // in px
const sketchHeight = 400; // in px
let boxPerRow = 16;
let boxWidth = sketchWidth / boxPerRow;

box.style.flexBasis = `${400 / 16}px`;
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
createNewSketchPad();