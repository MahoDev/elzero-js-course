let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// Needed Output
//(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

console.log(Array.from(new Set(myFriends)).sort());


