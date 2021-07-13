// import '../css/common.css';

import '../sass/main.scss';

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const body = document.querySelector('body');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

let timeOfChange = null;
let isActive = false;

function start(evt) {

    if (isActive) {
        return;
    }
    
    startBtn.disabled = true;
    isActive = true;

    timeOfChange = setInterval(() => {
        bodyChangeColor();
    }, 1000);
}

function stop(evt) {
    clearInterval(timeOfChange);
    timeOfChange = null;
    isActive = false;
    startBtn.disabled = false;
}

function bodyChangeColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}