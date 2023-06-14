let input = window.prompt("Print Number From – To", "Example: 5-20");

let splitInput = input.split("-");
let min = Math.min(...splitInput);
let max = Math.max(...splitInput);
for (let i =  min; i <= max ; i++){
    console.log(i);
}