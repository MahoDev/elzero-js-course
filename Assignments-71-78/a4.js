let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let finalResult = numsAndStrings.filter((element) => !isNaN(element)).
map((element) => -element);


console.log(finalResult);
// [-1, -10, 10, 20, -5, -3]