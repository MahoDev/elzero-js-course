function checkStatus(a, b, c) {
    let args = [a,b,c];
    let toPrint,namePart,agePart,statusPart = "";

    for(let i = 0; i < 3 ; i++){
      namePart = typeof args[i] == "string" ? `Hello ${args[i]}, `: namePart;
      agePart = typeof args[i] == "number" ? `Your Age is ${args[i]}, `: agePart;
      statusPart = typeof args[i] == "boolean" && args[i] === true ? `You Are Available For Hire`: typeof args[i] == "boolean" && args[i] === false? `You Are Not Available For Hire` : statusPart;
    }
    toPrint = namePart + agePart + statusPart;
    console.log(toPrint);
  }
  
  //use ternary operator
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"