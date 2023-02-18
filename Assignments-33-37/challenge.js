/*
If Challenge
*/

let a = 10;

a < 10 ? console.log(10) : a>= 10 && a<=40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("Unknown");

let st = "Elzero Web School";

(st.length * 2 + ""  === "34")? console.log("Good") : console.log("");

(st.charAt(st.search("W")) === "W")? console.log("Good") : console.log("");

(typeof st.length !== "string")? console.log("Good") : console.log("");

(typeof st.length === "number")? console.log("Good") : console.log("");

(st.slice(0, 6).repeat(2) === "ElzeroElzero")? console.log("Good") : console.log("");