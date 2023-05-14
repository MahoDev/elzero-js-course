let div = document.querySelector("div .our-element");
document.querySelector(".our-element + p").remove();

let addStart = document.createElement("div");
addStart.setAttribute("class","start");
addStart.setAttribute("title","Start Element");
addStart.setAttribute("data-value","Start");
addStart.innerText = "Start Element";

let addEnd = document.createElement("div");
addEnd.setAttribute("class","end");
addEnd.setAttribute("title","End Element");
addEnd.setAttribute("data-value","End");
addEnd.innerText = "End Element";



div.before(addStart);
div.after(addEnd);
