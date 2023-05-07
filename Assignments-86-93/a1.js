

console.log(document.querySelector(".element"));
console.log(document.querySelector("[name=js]"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div:first-of-type")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name=js]")[0]);
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.body.firstElementChild); 
//For some reason when querying nodes 
//they treat any new line (even the one that makes all elements 
//in one line
console.log(document.body.firstChild);
console.log(document.body.childNodes[0]);
console.log(document.body.children[0]);



console.log();
