let styling = document.createElement("style");
document.querySelector("head").appendChild(styling); 
let popupDiv = document.createElement("div");
let xButton = document.createElement("div");
xButton.classList.add("xButton");
xButton.textContent = "X";
let welcome = document.createElement("h1");
welcome.textContent = "Welcome";
let textInfo = document.createElement("p");
textInfo.textContent = "Welcome To Elzero Web School";

popupDiv.appendChild(xButton);
popupDiv.appendChild(welcome);
popupDiv.appendChild(textInfo);
popupDiv.classList.add("popup");

let overlay = document.createElement("div");
overlay.classList.add("overlay");


styling.textContent = `
.popup {
    z-index: 999;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #E6E6E6;
    width: 400px;
    height: 150px;
    border: 1px solid #c7c7c7;
    margin: 50px auto;
}
.xButton{
    position: absolute;
    background-color: red;
    color: white;
    font-size: 1rem;
    padding: 7px 10px;
    border-radius: 50%;
    right: 0;
    top: 0;
    cursor: pointer;
    transform: translate(50%, -50%);
}

h1{
    margin: 0;
}

.overlay{
    position: absolute;
    top:0;
    right:0;
    z-index: -5;
    background-color: black;
    opacity: 50%;
    width: 100%;
    height: 100%;
}

`

let body = document.querySelector("body");
this.setTimeout(()=>{
    body.appendChild(popupDiv);
    body.appendChild(overlay);
}, 100);

xButton.addEventListener('click',()=>{
    overlay.remove();
    popupDiv.remove();
})





