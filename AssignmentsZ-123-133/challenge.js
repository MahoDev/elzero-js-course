//Note: Youtube challenge is the same as assignment 8 in elzero website.

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

//Can't use numbers of true and false
//Can't use array indexes to get numbers from array
//Can't use loops or higher order functions
//Solution must be one line long
//If you use (length) property, you can only use it once
//Can't use any calculation operation other than *

// Needed Output
//210

console.log([...n1, ...n2].length * Math.max(...n2));


