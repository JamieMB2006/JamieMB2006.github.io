function colour() {
    // random num between 0 and 5
    let number = Math.floor(Math.random()*5);
    
    const id = document.getElementById("para"); 

    const colours = ['red','black','pink','blue','green'];
    
    // repeats function every 1000 milliseconds (1 second)
    setInterval(function() {
        id.style.color = colours[number];
        number = Math.floor(Math.random()*5);
    }, 1000);

}
 
const idAlert = document.getElementById("alertbtn");
idAlert.addEventListener("click", alertFunction);
idAlert.addEventListener("click", alertFunctionTwo);
idAlert.addEventListener("mouseover", mOver);

function alertFunction() {
    alert("Hello!");
}

function alertFunctionTwo() {
    alert("Hello again!");
}

function mOver() {
    document.getElementById("change").innerHTML += "Mouse over<br>";
}