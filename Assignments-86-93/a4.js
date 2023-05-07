let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let arr = [divOne,divTwo];

let att1 = divOne.getAttribute("title");
let att2 = divTwo.getAttribute("title");

divOne.setAttribute("title", att2);
divTwo.setAttribute("title", att1 + " " + arr.length);