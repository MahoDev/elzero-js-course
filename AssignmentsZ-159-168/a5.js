{
  let startDate = performance.now();
  //I lowered the upper limit
  for (let i = 1; i < 1000; i++) {
    console.log(i);
  }
  let endDate = performance.now();
  console.log(`Loop Took ${(endDate - startDate).toFixed(0)} Miliseconds.`);
}

// Needed Output
//"Loop Took 1921 Milliseconds.";
