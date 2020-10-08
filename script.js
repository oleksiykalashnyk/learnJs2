'use strict';
//Learn window/screen/document

console.dir(document);


const box = document.querySelector(".box"),
    btn1 = document.querySelector("#btn1"),
    btn2 = document.querySelector("#btn2");
    

//1. clientWidth and clientHeight
const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

//2. offsetWidth and offsetHeight
const widthOffset = box.offsetWidth;
const heightOffset = box.offsetHeight;

console.log(widthOffset, heightOffset);

//3. scrollWidth and scrollHeight
const widthscroll = box.scrollWidth;
const heighscroll = box.scrollHeight;

console.log(widthscroll, heighscroll);

// Practice 1
btn1.addEventListener("click", () => {
    box.style.height = (box.scrollHeight + 20)+ "px";
});

// Practice 2
btn2.addEventListener("click", () => {
    console.log(box.scrollTop);
});

//4. getBoundingClientRect()
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

//5. Cheack css
const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

//6. Scroll top
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);
document.documentElement.scrollTop = 0;
box.scrollTop = 600;

window.scrollBy(0,400);
window.scrollTo(0,400);
