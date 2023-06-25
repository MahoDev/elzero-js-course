{
  let birthOne = new Date("2001-04-1");
  let birthTwo = new Date(2001, 3, 1);
  let birthThree = new Date();
  birthThree.setFullYear(2001, 3, 1);
  birthThree.setMinutes(0, 0, 0);

  console.log(birthOne);
  console.log(birthTwo);
  console.log(birthThree);
}

// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";
