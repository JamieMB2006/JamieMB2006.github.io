let days = 10;
let hours = 1;
let minutes = 1;
let seconds = 10;
let daysP = document.getElementById("days");
let hoursP = document.getElementById("hours");
let minutesP = document.getElementById("minutes");
let secondsP = document.getElementById("seconds");

daysP.innerHTML = days;
hoursP.innerHTML = hours;
minutesP.innerHTML = minutes;
secondsP.innerHTML = seconds;


setInterval(function () {
    seconds-=1;
    secondsP.innerHTML = seconds;
    if (seconds == 0) {
        seconds = 60;
        minutes-=1;
        minutesP.innerHTML = minutes;
        if (minutes == 0) {
            minutes = 60;
            hours-=1;
            minutesP.innerHTML = minutes;
            hoursP.innerHTML = hours;
            if (hours == 0) {
                hours = 24;
                days-=1;
                hoursP.innerHTML = hours;
                daysP.innerHTML = days;
            }
        }
    }
},1000)
