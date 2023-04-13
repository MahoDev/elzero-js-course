let stringTwo = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = stringTwo.split(",").filter((element) => isNaN(parseInt(element)))
// .map((element,index,srcArr) => element === "_" ? " " : element.split("").pop())
// .reduce((acc, ele, index, srcArr) => srcArr.length - (+true)  == index ? acc : acc + ele ,"");

let solution = stringTwo.split(",")
.filter((ele) => isNaN(Number.parseInt(ele)))
.map((ele, ind, arr) => {
  arr.length = arr.length--;
  return ele.replace("_", " ");
})
.reduce((acc, ele, index, arr) => acc + ele)


console.log(solution);
// output= Elzero Web School