"use strict";
let ids = [1, 2, 3, 4, 5]; // can only contain numbers
let names = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options = [true, false, false]; /// can only contain true or false
let books = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript
// ids.push(6);
// ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
