'use strict';
//Learn function constructor

function User(name, id) {
    //add property
    this.name = name;
    this.id = id;
    this.human = true;

    //add method
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

//add prototype property
User.prototype.country = "Poland";

//add prototype method
User.prototype.exit = function () {
    console.log(`User ${this.name} out now`);
};

//create new Users
const ivan = new User("Ivan", 1);
const alex = new User("Alex", 1);

//show
console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

console.log(ivan.name + " and " + alex.name);

//use prototype property and methods
ivan.exit();
console.log(alex.country);
