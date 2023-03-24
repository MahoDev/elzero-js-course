// let names = function (...names) {
//     return `String [${names.join("], [")}] => Done!`;
// }

let names = (...names) => `String [${names.join("], [")}] => Done!`;

console.log(names("Osama","Mohamed","Ali","Ibrahim"));

let myNumbers = [20, 50, 10, 60];

// let calc = (one , two, ...nums) => (20 * 60 / 20) + 20; // 80

function calc(one , two, ...nums){
    return (20 * 60 / 20) + 20;
}

console.log(calc(10, 20, 60));