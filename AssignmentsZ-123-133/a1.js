let setOfNumber = new Set([10]);
setOfNumber.add(20).add(setOfNumber.size);
console.log(setOfNumber);
//or Array.from(setOfNumber)[setOfNumber.size -1]
console.log([...setOfNumber][setOfNumber.size -1]);