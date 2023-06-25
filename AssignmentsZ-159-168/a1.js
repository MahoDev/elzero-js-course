let birthDate = new Date("2001-04-01");
let seconds = birthDate.getTime() / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = months / 12;

console.log(seconds + " Seconds");
console.log(minutes + " Minutes");
console.log(hours + " Hours");
console.log(days + " Days");
console.log(months.toFixed(0) + " Months");
console.log(years.toFixed(0) + " Years");

// Needed Output
// "1247939400 Seconds";
// "20798990 Minutes";
// "346650 Hours";
// "14444 Days";
// "481 Months";
// "40 Years";
