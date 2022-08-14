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
// a dynamic 
// this is a varible thaat allows any data type
let man;
man = "cool";
man = 10;
//type aliases
// This is very similar to interface and can be interchanged freely between each other
// lets do some test
// type Book = {
//     name:String
//     noOfPage:Number
// }
// interface Book_ {
//     name:String,
//     noOfPage:Number
// }
// let Book1 : Book;
// let Book2 : Book_;
// Book1 = {
//     name: "cool",
//     noOfPage: 10,
//     // author: "mike"
// }
// Book2  = {
//     name: "cool",
//     noOfPage: 10,
//     author: "mike"
// }
//  from the testing example above i will say  i have not yet discovered the difference between type aliase and interface'
