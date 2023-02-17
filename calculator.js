let current = "";
let operation = "";
let equation = [];
let operationArray = ['+','-','*','/'];
let answer = "";

const numbers = document.getElementsByClassName("number")
const operationElement = document.getElementsByClassName("operation")
const answerElement = document.getElementById("answer")
const submitElement = document.getElementById("submit")

for (element of numbers) {
    element.addEventListener("click", numberValue)
};

for (element of operationElement) {
    element.addEventListener("click", numberValue);
};

submitElement.addEventListener("click", equationSubmit);
document.getElementById("clear").addEventListener("click", function () {
    current = "";
    operation = "";
    equation = [];
    answer = "";
    answerElement.value = "";
});

// set number value to the first item in the equation array 
function numberValue(event) {
    if (event.target.innerHTML in operationArray) {
        console.log(event.target.innerHTML);
        alert("hello");
        equation.push(current);
        operation = event.target.innerHTML;
        answerElement.value += current;
        equation.push(current);
        current = "";
    } else {
        current += event.target.innerHTML;
        answerElement.value = current;
    }
}

function equationSubmit() {
    equation.push(current);
    operation = equation[1];
    console.log(operation);
    switch (operation) {
        case ("+"):
            answer = parseInt(equation[0]) + parseInt(equation[2]);
            break;
        case ("-"):
            answer = parseInt(equation[0]) - parseInt(equation[2]);
            break;
        case ("*"):
            answer = parseInt(equation[0]) * parseInt(equation[2]);
            break;
        case ("/"):
            answer = parseInt(equation[0]) / parseInt(equation[2]);
            break;
    }
    answerElement.value = answer;
}
