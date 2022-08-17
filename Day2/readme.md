# Day 2 with typeScript (.. there is still hope No bug yet)

#### TypeScript Array
> Just like java ( i have to put a closed square bracket with the data type 😥)
```ts
let stringArray : String[] = ['only string can be here', 'and here']
let booleanArray : boolean[] = [true, false];
let objectOnly : object[] = [ {name:"codad5"}, {name:"freecodecamp"}]
//we can also create an array for any data type
let anyData = any[] = ['cool', 23, false]
```
> for more cooler stuff 😎 I can use union types to define arrays containing multiple types:
```ts
let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
person[1] = {name: 'Danny'} // Error - person array can't contain objects
```

## TypeScript Object (I have been waiting for this 😋)

```ts
// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolean


person = {
  name: 'John',
  location: 'US',
}; 
// ERROR: missing the isProgrammer property
```