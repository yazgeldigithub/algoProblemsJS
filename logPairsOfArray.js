//Memory refresh

// for (key in object) {
//   // code block to be executed
// }

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text);

let fruits = ["Apple", "Banana"];
fruits.forEach(function (item, index, array) {
  console.log(item, index);
  // Apple 0 // Banana 1
});

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

// Log pairs of array

const boxes = ["a", "b", "c", "d", "e"];

function logallPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logallPairsOfArray(boxes);

// O(n ^ 2) Quadratic time

function compressBoxesTwice(boxes1, boxes2) {
  boxes1.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(a + b)

/*
#Big O Cheat Sheet:
-Big OsO(1) Constant- no loops
O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
O(n) Linear- for loops, while loops through n items
O(n log(n)) Log Liniear- usually sorting operations
O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops
O(2^n) Exponential- recursive algorithms that solves a problem of size N
O(n!) Factorial- you are adding a loop for every element
Iterating through half a collection is still O(n)
Two separate collections: O(a * b)
-What can cause time in a function?-
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

-Rule BookRule 1: Always worst Case
Rule 2: Remove Constants

Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps

Rule 4: Drop Non-dominant terms
-What causes Space complexity?-
Variables
Data Structures
Function Call
Allocations
*/
