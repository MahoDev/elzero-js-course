let nums5 = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums5.reduce(function(accumulator, currElement){
    if (currElement % 2 !== 0) accumulator += currElement;
    else if (currElement % 2 === 0) accumulator *= currElement;
    return accumulator;
}, 1);

console.log(newNums);
// 500