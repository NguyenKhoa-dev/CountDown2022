const body = document.querySelector('body');
const sun = document.querySelector('.sun');
let daysElement = document.getElementById('day');
let hoursElement = document.getElementById('hour');
let minutesElement = document.getElementById('minute');
let secondsElement = document.getElementById('second');
var currentDay = new Date();
var countDownDate = new Date("Feb 1, 2022 00:00:00").getTime();
var audio = new Audio('sounds/WaitingSound.mp3');
var playPause = false;

function setDayNight() {
    let hour = currentDay.getHours();
    if (hour >= 18 || hour < 6) {
        body.classList.add('dark');
    }
    else {
        body.classList.remove('dark');      
    }        
}    

//setInterval(setDayNight, 1000);

setInterval(function() {
    var now = new Date().getTime();    
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.innerHTML = (days < 10) ? "0" + days : days;
    hoursElement.innerHTML = (hours < 10) ? "0" + hours : hours;
    minutesElement.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    secondsElement.innerHTML = (seconds < 10) ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(x);            
    }
}, 1000);

sun.onclick = function() {
    audio.loop = true;
    if (playPause == false) {
        audio.play();
        playPause = true;
    }
    else {
        audio.pause();
        playPause = false;
    }    
}