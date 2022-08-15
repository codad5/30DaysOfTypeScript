"use strict";
// Dom and type casting
const link = document.querySelector('a');
console.log(link.href);
// type casting 
// This is telling typescript the element type
const form = document.getElementById('_form');
// HTMLFormELement is the data type for variable form
console.log(form.method);
//  adding Event listener
form.addEventListner('submit', (e) => {
    console.log(e.target);
});
// // Class in  Typescript
// class Human {
//     name:String
//     age:Number
//     isGradaute:Boolean
//     constructor(n: String, age: Number, isGrad: Boolean){
//         this.name = n
//         this.age = age
//         this.isGradaute = isGrad
//     }
// }
// adding access modifier
// Type script has 4 main access modifier
// - Public
// - Private
// - Protected
// - readonly
class Human {
    constructor(n, age, isGrad) {
        this.name = n;
        this.age = age;
        this.isGradaute = isGrad;
    }
}
//Literal Type
let color = 'red';
// Generic 
// const addID = (obj: object) => {
//     return {...obj, id: Math.floor(Math.random() * 1000)}
// }
// var person = addID({name:"Mike", age:20})
// console.log(person.age) //  age property will show error saying it is undefined
// console.log(person.id)
//
// Using Generic 
// const addID = <T> (obj : T) => {
//     return {...obj, id: Math.floor(Math.random() * 1000)}
// }
// //  using this typescript sees no issue if we pass no string as
// var person = addID({name:"Mike", age:20})
// var person2_ = addID("sally") //This will through an error
// console.log(person.name)
// console.log(person2_.name) //  this will through an error as 
// to prevent this you can extend the generic property to the required type
// const addID = <T extends object > (obj: T) => {
//         return {...obj, id: Math.floor(Math.random() * 1000)}
// }
// const person2_ = addID("sally") // this will through an error
// the function above caught the error quite well but other data type like Array behave like an object
// that error can be solve by specifying the required property
// const addID = <T extends {name:String}>(obj: T) => {
//     return { ...obj, id: Math.floor(Math.random() * 1000) }
// }
// const person2_ = addID({name:"sally"}) // this will through an error
// console.log(person2_.id)
// Generic wirh interface
// interface Song {
//     name:String,
//     year:Number,
//     hit:String[]
// }
// now if we want to use the interface to create a new object it but the hits show be data type of number it will give us an err0r
// like rhis below 
// let doro: Song = {
//     name:"doro",
//     year:2022,
//     hit:[2, 5, 5] // Type 'number' is not assignable to type 'String'
// }
// to solve this we can use generic
// interface Song<T> {
//     name: String,
//     year: Number,
//     hit: T
// }
// let doro: Song<Number[]> = {
//     name:"doro",
//     year:2022,
//     hit:[2, 5, 5] // No error found
// }
