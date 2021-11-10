//Memory refresh

// Print array of objects
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var fruitsArray = [
  { id: 123, name: "apples", total: 30 },
  { id: 541, name: "oranges", total: 42 },
  { id: 300, name: "bananas", total: 18 },
];

for (i = 0; i < fruitsArray.length; i++) {
  console.log(fruitsArray[i].name + " " + fruitsArray[i].total);
}

// apples : 30
// oranges : 42
// bananas : 18

// Print objects
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let fruitsObject = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
};

for (let i in fruitsObject) {
  console.log(i + fruitsObject[i]);
}

// 1 a
// 2 b
// 3 c
// 4 d
// 5 e

// Sort array of numbers
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arrayOfNumbers = [3, 1, 4, 2, 5];

const ascending = (a, b) => a - b;
arrayOfNumbers.sort(ascending);
console.log("Sorted in ascending order array of numbers: " + arrayOfNumbers);

const descending = (a, b) => b - a;
arrayOfNumbers.sort(descending);
console.log("Sorted in descending order array of numbers: " + arrayOfNumbers);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sort array of objects

const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "desktop",
    price: 1500,
  },
  {
    name: "phone",
    price: 500,
  },
];

products.sort((a, b) => a.price - b.price);

console.log(products);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// forEach loop for arrays

let fruits = ["Apple", "Banana"];
fruits.forEach(function (item, index, array) {
  console.log(item, index);
  // Apple 0 // Banana 1
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (key in object) {
//   // code block to be executed
// }

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text);

let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

let last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"]

let first = fruits.shift(); // remove Apple from the front
// ["Banana"]

let newLength1 = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"]

fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf("Banana");
// 1

let removedItem = fruits.splice(pos, 1); // this is how to remove an item

// ["Strawberry", "Mango"]

let shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
