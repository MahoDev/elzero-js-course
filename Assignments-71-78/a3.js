let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function(accumulator, currElement, currIndex, srcArr){
    if(Array.isArray(currElement))
        accumulator = accumulator.concat(currElement);
    else
        accumulator.push(currElement);
    return accumulator;
},[]).reduce(function(accumulator, element){
    return accumulator + element
},"");

console.log(newArray)
// Elzero