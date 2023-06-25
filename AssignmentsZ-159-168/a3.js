{
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  console.log(date.setDate(0));
  console.log(date);
  console.log(
    `Previous Month is ${
      months[date.getMonth()]
    } And Last Day Is ${date.getDate()}`
  );
}

// Needed Output
//"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)";
//"Previous Month Is April And Last Day Is 30";
