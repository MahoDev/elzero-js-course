let form = document.querySelector("div.a6 form");

let numInput = document.querySelector("div.a6 input[type='number']");
let textInput = document.querySelector("div.a6 input[type='text']");

let select = document.querySelector("div.a6 select");
let submit = document.querySelector("div.a6 input[type='submit']");
let resultDiv = document.querySelector("div.a6 .results");

//styling start


form.style.cssText = `
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;
resultDiv.style.cssText = `
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
const style = document.createElement('style');
style.textContent = `
  .input {
    background-color: gainsboro;
    width: 300px;
    height: 30px;
    font-size: 15px;
    padding: 5px 5px 5px 15px;
    border-radius: 3px;
    border-color: #cacaca;
  }
  select.input {
    width: 325px;
  }

  .box{
    background-color: #fc4a2a;
    width: 300px;
    height: 30px;
    font-size: 20px;
    padding: 5px 5px 5px 15px;
    border-radius: 3px;
    border: none;
  }
  .box:hover {
    cursor: pointer;
  }
`;
document.head.appendChild(style);

submit.style.cssText = `
    background-color: #009887;
    color: white;
    width: 325px;
    height: 35px;
    font-size: 15px;
    padding: 5px 5px 5px 15px;
    border-radius: 3px;
    border: none;
}
    
`;
// or submit.onmouseover = ....
submit.addEventListener('mouseover', () => 
    submit.style.cursor = 'pointer'
  );

//styling end

submit.onclick = (event)=> {
    //prevents page reload
    event.preventDefault();
    resultDiv.children = [];
    let result1 = validateNumInput(numInput.value);
    let result2 = validateTextInput(textInput.value);
    if(result1 == true && result2 == true){
        createChosenElements(numInput.value, select.value, textInput.value);
    }
}



function validateNumInput(currValue){
    let valid = false;
    let msgElement = document.querySelector(".msgNum");
    if(msgElement != null){
        let parentElement = msgElement.parentNode;
        parentElement.removeChild(msgElement);
    }
 
    if(currValue === "" || currValue <= 0){
        let msg = document.createElement("p");
        msg.className = "msgNum";
        msg.textContent = "Must enter a value higher than 0";
        numInput.insertAdjacentElement('afterend',msg);
        return valid;
    }
    else{
         return valid = true;
    }
}
function validateTextInput(currValue){
    let valid = false;
    let msgElement = document.querySelector(".msgText");
    if(msgElement != null){
        let parentElement = msgElement.parentNode;
        parentElement.removeChild(msgElement);
    }
 
    if(currValue === ""){
        let msg = document.createElement("p");
        msg.className = "msgText";
        msg.textContent = "Must enter a value";
        textInput.insertAdjacentElement('afterend',msg);
        return valid;
    }else{
        return valid = true;
   }

}


function createChosenElements(elementsCount, chosenElementName, innerText){
    //delete old elements first
    console.log(resultDiv.children);
    console.log(resultDiv.childNodes);

    Array.from(resultDiv.children).forEach((el) => {
        resultDiv.removeChild(el);
      });
      
    
    for(let i = 0; i < elementsCount ; i++){
        let el = document.createElement(chosenElementName);
        el.className = "box";
        el["title"] = "Element";
        el["id"] = `id-${i+1}`;
        el.textContent = innerText;
        el.style.cssText = `
        display:flex;
        justify-content: center;
        align-items: center;
        color:white;
        text-align: center;
        `;
        resultDiv.appendChild(el);
    }


}


