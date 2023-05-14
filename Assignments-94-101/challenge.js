//remove default margin
document.body.style.margin = "0";

// Header start
let challengeDiv = document.querySelector(".challenge")
let header = document.createElement("header");
let title = document.createElement("div");
let ul = document.createElement("ul");
header.appendChild(title);
header.appendChild(ul);
let liItems = ["Home","About","Service","Contact"];


header.style.cssText = `
display: flex;
justify-content: space-between;
padding: 10px;
`;

title.innerText = "Elzero";
title.style.cssText = `
font-size : 1.5em;
font-weight: 800;
color: #4CAF50;
`;

title.addEventListener('mouseover',()=>{
    title.style.cursor = "pointer";
});

ul.style.cssText =`
display:flex;
gap:10px;
list-style:none;
color: #9E9E9E;
font-weight: 600;
`;

liItems.forEach((e)=>{
    let li = document.createElement("li");
    li.innerText = e;
    ul.appendChild(li);
    li.addEventListener('mouseover',()=>{
        li.style.cursor = "pointer";
    });
});

challengeDiv.appendChild(header);
// Header end

//Products Section Start
let productSection = document.createElement("section");
productSection.style.cssText = `
display:flex;
flex-wrap: wrap;
justify-content: center;
gap:15px;
padding: 15px;
background-color:#E0E0E0;

`;
for(let i = 1 ; i <= 15 ; i++){
    let productDiv = document.createElement("div");
    productDiv.className = "product";
    let span = document.createElement("span");
    let para = document.createElement("p");
    productDiv.appendChild(span);
    productDiv.appendChild(para);
    productSection.appendChild(productDiv);


    productDiv.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 250px;
    height: 100px;
    background-color: white;
    box-shadow: 0 0 10px #E0E0E0;

    `;
    span.innerText = i;
    span.style.cssText = `
    font-size: 2em;
    font-weight: bold;
    `;
    para.innerText = "Product";
    para.style.cssText = `
    font-size: 0.8em;
    font-weight: 600;
    color: #757575;
    `;
}
challengeDiv.appendChild(productSection);

//Products Section End

//Footer Start
let footer = document.createElement("footer");
footer.innerText = "Copyright 2023"
footer.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
color:white;
font-size: 1.5em;
padding: 15px;
background-color: #4CAF50;
`;
challengeDiv.appendChild(footer);
//Footer End


