let counterId = document.getElementById("counter").innerHTML;

document.getElementById("decrease").addEventListener("click", decrease);

// resets counterId to 0 so if its called again by other functions it will start again at 0
document.getElementById("reset").addEventListener("click", function() {
    counterId = "0";
    document.getElementById("counter").innerHTML = counterId;
});

document.getElementById("increase").addEventListener("click", increase);

// converts the string value that is in id counter to int and takes 1 then converts back ot string
function decrease() {
    counterId=(parseInt(counterId)-1).toString();
    document.getElementById("counter").innerHTML = counterId;
}

// converts the string value that is in id counter to int and adds 1 then converts back ot string
function increase() {
    counterId=(parseInt(counterId)+1).toString();
    document.getElementById("counter").innerHTML = counterId;
}