"use strict";
// functions in type script
// a function that takes the diameter of a circle and return a string of it's area
// function circle(daim: Number): String{
//     return 'The circumference is ' + Math.PI * diam;
// }
// console.log(circle(10))
// the same as the function above but using ES6 arrow function
// const circle = (diam: Number) : String => {
//         return 'The circumference is ' + Math.PI * diam;
// }
// console.log(circle(10))
// how to explicit a function when using arrow function
const circle = (diam) => {
    return 'The circumference is ' + Math.PI * diam;
};
console.log(circle(10));
// making a paramter optional 
const greet = (name, title) => {
    return "good day " + title + name;
};
console.log(greet("mike"));
// a function that returns void
const logger = (msg) => {
    console.log(msg);
};
// a dynamic type
let man;
man = "cool";
man = 10;
