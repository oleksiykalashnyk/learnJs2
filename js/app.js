"use strict";
//Learn setTimeout and setInterval

//1. Create setTimeout()
const timerId1 = setTimeout(function (text) {
    console.log(text);
}, 2000, "Hello 1");

//2. Call function inside
const timerId2 = setTimeout(hello2, 1000);

function hello2() {
    console.log("Hello 2");
}

//3. clearInterval()
clearInterval(timerId2);

//4. Create setInterval()
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");

let timerId3,
    i = 0,
    q = 0;

btn.addEventListener("click", () => {
    timerId3 = setInterval(function () {
        if (i === 3) {
            clearInterval(timerId3);
        }
        console.log("Hello 3 - " + (i + 1));
        i++;
    }, 500);
});

//5. Recursivnaja funkcija
let id = setTimeout(function log() {
    console.log("Hello");
    id = setTimeout(log, 50000);
}, 500);


//6. Create amination
function animation() {
    const elem = document.querySelector(".box");
    let pos = 0;

    const idTimerAnimation = setInterval(frame, 10);

    function frame(idTimerAnimation) {
        if (pos == 300) {
            clearInterval(idTimerAnimation);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn1.addEventListener("click", animation);