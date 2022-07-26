// tuple in TypeScript this is basically an array in javascript both the data type of each indexes of the array cant be altered
let tuple : [String, Number] = ["Hello", 1];
tuple[0] = 'Danny';
// will throw error if you try to change the data type of the index
// tuple[0] = 1;

// Object in typescript
// when an object type is declare it must have all properties and the data type of each property must be defined
// let person: {
//     name:String,
//     age:Number,
//     hasDrivingLicense:Boolean
// }

// person = {
//     name: 'Danny',
//     age: 30,
//     hasDrivingLicense: true

// }

// if try to change the data type of the property it will throw an error
// person.name = 1;

// or if i want to declare perosn again but with missing properties
// let person2: {
//     name:String,
//     age:Number,
//     hasDrivingLicense:Boolean
// }

// person2 = {
//     name: 'Danny',
//     hasDrivingLicense: true

// }

// This will throw an error because the data type of the property is not defined

// we can also declare the data type of diffrent objects of the same type using the interface keyword
// interface Person {
//     name:String,
//     age:Number,
//     hasDrivingLicense:Boolean
// }
// let person: Person = {
//     name: 'Danny',
//     age: 30,
//     hasDrivingLicense: true
// }

//also we can declare the data type of a function parameter and the return type 
interface Person {
    name:String,
    age:Number,
    hasDrivingLicense:Boolean,
    greet(msg:String):String
}

let person_: Person = {
    name: 'Danny',
    age: 30,
    hasDrivingLicense: true,
    greet(msg:String):String {
        return msg;
    }
}

console.log(person_.greet('Hello'));

// we can also declare the data type of a function parameter and the return type 
interface Person2 {
    name:String,
    age:Number,
    hasDrivingLicense:Boolean,
    greet(msg:String):String
}

let person2: Person2 = {
    name: 'Danny',
    age: 30,
    hasDrivingLicense: true,
    greet(msg:String):String {
        return msg;
    }
}

console.log(person2.greet('Hello'));

// we can also declare the data type of a function parameter and the return type 
interface Person3 {
    name:String,
    age:Number,
    hasDrivingLicense:Boolean,
    greet(msg:String):String
}

let person3: Person3 = {
    name: 'Danny',
    age: 30,
    hasDrivingLicense: true,
    greet(msg:String):String {
        return msg;
    }
}

console.log(person3.greet('Hello'));

// we can also declare the data type of a function parameter and the return type 
interface Person4 {
    name:String,
    age:Number,
    hasDrivingLicense:Boolean,
    greet(msg:String):String
}

let person4: Person4 = {
    name: 'Danny',
    age: 30,
    hasDrivingLicense: true,
    greet(msg:String):String {
        return msg;
    }
}

console.log(person4.greet('Hello'));

// we can also declare the data type of a function parameter and the return type 
interface Person5 {
    name:String,
    age:Number,
    hasDrivingLicense:Boolean,
    greet(msg:String):String
}

let person5
: Person5 = {
    name: 'Danny',
    age: 30,
    hasDrivingLicense: true,
    greet(msg:String):String {
        return msg;
    }
}

//Or we can use old school javascript arrow function to declare the return type of a method
interface Person6 {
    name:String,
    age:Number,
    hasDrivingLicense:Boolean,
    greet(msg:String):String
    bye:(msg:String) => String
}

let person6: Person6 = {
    name: 'Danny',
    age: 30,
    hasDrivingLicense: true,
    greet(msg:String):String {
        return msg;
    },
    bye(msg:String):String {
        return msg;
    }
}

