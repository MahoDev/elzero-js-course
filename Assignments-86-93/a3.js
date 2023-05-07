let input = document.querySelector("input[placeholder='USD Dollar']");
let exchangeDiv = document.querySelector("div.result")


input.oninput = (event)=>{
    exchangeDiv.innerHTML = `${event.target.value} USD Dollar = ${(event.target.value * 15.6).toFixed(2)} Egyptian Pound`;
};

