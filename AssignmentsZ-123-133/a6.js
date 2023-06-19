let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];


function changeArray(arr){
    let numbers = arr.filter((e)=> ! isNaN(e));
    let charsOnlyArr = arr.filter((e) => isNaN(e));
    let newArr = numbers
      .concat(charsOnlyArr)
      .copyWithin(0, numbers.length, numbers.length * 2);
      return newArr;
}

console.log(changeArray(chars3));
// Needed Output
//chars1 : ["A", "B", "C", "A", "B", "C", "D", "E"]; 
//chars2 : ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
//chars3 : ["Z", "Y", "Z", "Y", "A", "D", "E"]
