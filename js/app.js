"use strict";
//Learn Date

//1. Time now
const now = new Date();
console.log(now);
console.dir(now);

console.log("///////////////////////////////////");

//2.1 Time arguments 1
const dataDay1 = new Date("1993-08-11");
console.log(dataDay1);

//2.2 Time arguments 2
const dataDay2 = new Date(2020,5,1,20,30);
console.log(dataDay2);

console.log("///////////////////////////////////");

//3.1 Getery for Date
const fullYear = new Date();
console.log(fullYear.getFullYear());
console.log(fullYear.getMonth());
console.log(fullYear.getDate());
console.log(fullYear.getDay());
console.log(fullYear.getHours());
console.log(fullYear.getUTCHours());

console.log("///////////////////////////////////");

//3.2 Time zone difference in minutes
console.log(fullYear.getTimezoneOffset());

//3.3 Time in milliseconds since January 1 1970
const dateAfter1970 = fullYear.getTime();
console.log(dateAfter1970);
const dateNewNow = new Date(dateAfter1970);
console.log(dateNewNow);

console.log("///////////////////////////////////");

//4. Setery for Date
const newDate = new Date();
newDate.setHours(23);
newDate.setMinutes(40);
console.log(newDate);

console.log("///////////////////////////////////");

//5. Parse date
const date1 = new Date("1993-08-11");
//Similarly
// const date2 = new Date.parse('2020-08-11');

console.log("///////////////////////////////////");

//6. Easy practice
let start = new Date();

for(let i = 0; i < 1000000;i++){
    let some = i**3;
}

let finish = new Date();

console.log(`FOR work ${finish-start} milisec.`);

