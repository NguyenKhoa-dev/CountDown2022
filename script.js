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

var y = setInterval(setDayNight, 1000);

var x = setInterval(function() {
    var now = new Date().getTime();    
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(x);       
        startFireWorks();
        setUpText();
    }
    
    daysElement.innerHTML = (days < 10) ? "0" + days : days;
    hoursElement.innerHTML = (hours < 10) ? "0" + hours : hours;
    minutesElement.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    secondsElement.innerHTML = (seconds < 10) ? "0" + seconds : seconds;

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

function startFireWorks() {
    audio.pause();
    audio = new Audio('sounds/HPNY.mp3');
    audio.play();

    const container = document.querySelector('.fireworks-container')
    const fireworks = new Fireworks(container)
    fireworks.start()
    fireworks.setOptions({ delay: { min: 10, max: 15 }});
}

function setUpText() {
    const countDownContainer = document.querySelector('.count-down-container');
    countDownContainer.style.animation = 'animateCountDown 1s linear';
    countDownContainer.style.opacity = '0';

    const congrate = document.querySelector('h1');
    congrate.style.display = 'block';
    congrate.style.animation = 'animateText 1s linear';
}