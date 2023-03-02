
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar"
];

let adminsCount = 0;

for(let i = 0 ; i < myAdmins.length ; i++){
    if(myAdmins[i] == "Stop") break; 
    adminsCount += 1;

}

document.write(`<div>We Have ${adminsCount} Admins</div>`);
document.write(`<hr>`);

for(let i = 0; i < adminsCount ; i++){
    document.write(`<p>The Admin for Team ${i+1} is ${myAdmins[i]}</p>`);
    document.write(`<h1>Team Members:</h1>`);
    let empCount = 0;
    for(let j=0; j < myEmployees.length ; j++){
        if (myEmployees[j][0] == myAdmins[i][0]){
            document.write(`<p>- ${++empCount} ${myEmployees[j]}</p>`);
        }
    }
    document.write(`<hr>`);
    empCount = 0;

}