//Note: Elzero's assignment 6 is same as youtube's challenge.

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

{
// Write Your Code Here
let title, age, available, sk2;

//To get different results we just need to cahnge the value of ""chosen" variable
({title, age, available, skills: [, sk2] } = myFriends[chosen-1]);
console.log(`
${title}
${age}
${available ? "Available" : "Not Available"}
${sk2}
`);



("Osama");
39;
("Available");
("CSS");

// If chosen === 2

("Ahmed");
25;
("Not Available");
("Django");

// If chosen === 3

("Sayed");
33;
("Available");
("Laravel");
}