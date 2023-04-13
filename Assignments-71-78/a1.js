let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let final = mix.map(function(element){
    return isNaN(element) ? element : "";
}).reduce(function(accumulator , curValue){
    return accumulator + curValue;
},"");

console.log(final);
// output = Elzeros