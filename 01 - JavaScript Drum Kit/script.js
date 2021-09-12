"use strict";
const keys = document.querySelectorAll(".key");


const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    keys.forEach(key => key.classList.remove("playing"));
    key.classList.add("playing");
}

const removeTransition = e => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));