let n1 = 10;
let n2 = 30;
let n3 = "30";

if(n3 > n1 && typeof n3 != typeof n4){
    console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number`);
    let second = n3 != n2 && typeof n3 != typeof n2 ? "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" : "";
    console.log(second);
    let third =  n3 == n2 && typeof n3 != typeof n2 ? "{n3} Value And Type Is Not The Same As {n1} And Type Is Not The Same As {n2}": "";
    console.log(third);
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{n3} Value And Type Is Not The Same As {n1} And Type Is Not The Same As {n2}"