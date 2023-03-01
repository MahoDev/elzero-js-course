//  Array Challange 
// Part 01: 
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

//numbers are restricted except the variables. ++, and -- aren't allowed either.

console.log(my.slice(zero, my.indexOf("Gamal")).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(my.indexOf("Mazero"), counter).reverse()); // ["Elham", "Mazero"]

console.log(my[my.indexOf("Elham")].slice(zero, my.indexOf("Elham")) + my[my.indexOf("Mazero")].substring(my.indexOf("Elham"))); // "Elzero" 

console.log(my[my.indexOf("Mazero")].slice(my.indexOf("Gamal")).replace("o","O")); // rO