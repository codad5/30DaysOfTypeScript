# What i learnt on Day 1

- [*] installed type script using `npm i -g typescript`
- [*] setting up a typescript config fle using`tsc --init`
- [*] Primitives are immutable: they can't be altered

## primitive data

    Primitives are immutable: they can't be altered, The variable may be reassigned a new value, but the existing value can't be changed in the ways that objects, arrays, and functions can be altered.
> example

```ts
let name = 'Danny';
name.toLowerCase();
console.log(name); // Danny - the string method didn't mutate the string

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - the array method mutated the array

name = 'Anna' // Assignment gives the primitive a new (not a mutated) value
```

## Types in TypeScript
- Primitive type
- Reference Types

### All primitive data type

- String
- Number
- bigint
- boolean
- undefined
- null
- symbol

# Declaring a variable 
we can set the data type we want a variable to be by adding `: type ` after declaring the variable
> example
```ts
let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;
```

> we can also set a variable to be a union type
#### Union Type
> A union type is a variable that can be assigned more than one type:

```ts
let age: string | number;
age = 26;
age = '26';
```

#### Reference Types
> In typescript almost everything is an object

> String, Number and booleab can be defined by the `new` keyword

```ts
let firstname = new String('Danny');
console.log(firstname); // String {'Danny'}
```
[Read about the difference between primitive and refrence](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#caveatprimitivevsreferencetypes)

