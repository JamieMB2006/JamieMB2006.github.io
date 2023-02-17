let current = "";
let operation = "";
let equation = [];
let answer = "";

const numbers = document.getElementsByClassName("number")
const operationElement = document.getElementsByClassName("operation")
const answerElement = document.getElementById("answer")
const submitElement = document.getElementById("submit")

for (element of numbers) {
    element.addEventListener("click", numberValue)
};

for (element of operationElement) {
    element.addEventListener("click", numberValue)
};

submitElement.addEventListener("click", equationSubmit);

function numberValue(event) {
    if (event.target.innerHTML == "+") {
        equation.push(current);
        answerElement.value += "+";
        equation.push("+");
        current = "";
    } else {
        current += event.target.innerHTML;
        answerElement.value = current;
    } 
}

function equationSubmit() {
    equation.push(current);
    answer = parseInt(equation[0]) + parseInt(equation[2]);
    answerElement.value = answer;
}
