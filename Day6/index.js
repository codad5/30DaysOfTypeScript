"use strict";
//Day 6
// enum -- I will say they are like constant , read-only json 
// lets try if they are editable 
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
// TypeScript Strict mode
//The first is the No implicit any (noImplicitAny)
//With the noImplicitAny option turned on, TypeScript will instantly flag an error if we don't explicitly state the type of a:
