let num3 = "10";

// Solution One
console.log(+num3 + (+num3)); // 20

// Solution Two
console.log(Number(num3) + Number(num3)); // 20

// Solution Three
console.log(num3 - num3 + +num3 + +num3); // 20

// Solution Four
console.log(num3 * (true + true)); // 20