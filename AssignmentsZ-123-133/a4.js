let theNumber = 100020003000;

// Needed Output
//123;

//the 0 at the start 0123 is automatically removed
console.log(+[...new Set(""+theNumber)].sort().join(""));


