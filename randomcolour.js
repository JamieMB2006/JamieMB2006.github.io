
// HTML Elements
const randomRGBElement = document.getElementById("original");
const button1Element = document.getElementById("button 1");
const button2Element = document.getElementById("button 2");
const button3Element = document.getElementById("button 3");
const button4Element = document.getElementById("button 4");
const button5Element = document.getElementById("button 5");
const button6Element = document.getElementById("button 6");

// Random RGB Colour
function generateColour() {
    let randRed = Math.floor(Math.random() * 255);
    let randGreen = Math.floor(Math.random() * 255);
    let randBlue = Math.floor(Math.random() * 255);
    return `rgb(${randRed.toString()}, ${randGreen.toString()}, ${randBlue.toString()})`;
}

let buttonArray = [
    button1Element,
    button2Element,
    button3Element,
    button4Element,
    button5Element,
    button6Element
];

for (let button in buttonArray) {
    buttonArray[button].addEventListener("click", onButtonClick)
}

let mainColour = generateColour();
let randNum = Math.floor(Math.random() * (buttonArray.length - 1));

buttonArray[randNum].style.backgroundColor = mainColour;
randomRGBElement.value += mainColour;

buttonArray = buttonArray.filter(function(item) {
    return item != buttonArray[randNum];
})

buttonArray.forEach(element => {
    element.style.backgroundColor = generateColour();
});

function onButtonClick(event) {
    if (event.target.style.backgroundColor == mainColour) {
        alert("Correct!");
    } else {
        alert("incorrect");
    }
}