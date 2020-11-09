'use strict';
//Learn "THIS"

//1. re-call function

function showThis(a, b) {
    //in use strict "undefined" but else this = object "window"
    console.log(this);

    function sum() {
        //in use strict "undefined" but else this = object "window"

        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(16, 2);

//2 this in object
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum();

//3 If this inside function constructor or class
function User(name) {
    this.name = name;

    this.showName = function () {
        console.log("Hello " + this.name);
    };
}
let olek = new User("Olek");
olek.showName();

console.clear();

//4. Use this

function sayName(a, b) {
    console.log(this);
    console.log(this.name + " " + a + " " + b);
}

const user = {
    name: "John"
};
//4.1 .call()
sayName.call(user, "Text", 56);

//4.2 .apply()
sayName.apply(user, ["WOW", 123]);

//4.3 .bind()
function count(num) {
    return this * num;
}
const double = count.bind(2);
console.log(double(3)); //6
console.log(double(9)); //18

console.clear();

//practice
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    this.style.backgroundColor = "red";
    console.log(this);
});

//5. callback funtion this
//CallBack dont have "this" his use parent "this"
const xxx = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
xxx.sayNumber();

//6. next gen
const dbl1 = (a) =>{
    return a*2;
};
const dbl2 = a => a*2;
console.log(dbl1(4));
console.log(dbl2(44));
