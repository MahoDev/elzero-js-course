let myString = "EElllzzzzzzzeroo";

let result = [];
result = myString.split("").filter(function(element, index, srcArr){
    let boolResult;
    if(boolResult = !result.includes(element)) result.push(element);
    return boolResult;
}).reduce(function(accumulator, currElement){
    return accumulator + currElement;
});


console.log(result);
// Elzero