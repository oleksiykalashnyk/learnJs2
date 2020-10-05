"use strict";
//Learn class list in elements

const btns = document.querySelectorAll('button');

//////////////////////////////////////////
//Part 1
//////////////////////////////////////////
console.log("////////////////Part 1///////////////////");

//1. classList.length 
console.log(btns[0].classList.length);

//2. classList.item()
console.log(btns[0].classList.item(0));
console.log(btns[0].classList.item(1));

//3. classList.add()
btns[1].classList.add("red");
//add more classes
btns[1].classList.add("red", "some");

//4. classList.remove()
btns[0].classList.remove("some");

//5. classList.toggle()
btns[0].classList.toggle("some");

//6 classList.contains()
console.log(btns[3].classList.contains("some"));
console.log(btns[1].classList.contains("red"));

if (btns[1].classList.contains("red")) {
    console.log("Yes we have");
}

//Practice n.1
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains("red")) {
        btns[1].classList.add("red");
    } else {
        btns[1].classList.remove("red");
    }
});

//Practice n.2
btns[0].addEventListener('click', () => {
    btns[2].classList.toggle("blue");
});

//////////////////////////////////////////
//Part 2
//////////////////////////////////////////
console.log("////////////////Part 2///////////////////");

//7. Delegirovanie

const wrapper = document.querySelector(".btn-block");

//Practice n.3
wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log("hello");
    } 
});

//Practice n.4
wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("red")) {
        console.log("Im RED Hello!");
    } 
});

//Practice n.5
//    !!!   event.target.matches("button.blue")
wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.blue")) {
        console.log("MATCHES WORK!!!");
    } 
});