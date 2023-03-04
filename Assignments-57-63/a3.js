function ageInTime(theAge) {
    if(theAge <= 10 || theAge >= 100){
        return console.log("Age Out of Range");
    }
    else if(Number.isNaN(theAge)) return console.log("Pass a number to the function");
    else{
        console.log((theAge * 12 + " Months")); 
        console.log(Math.round((theAge * 365)/ 7) + " Weeks");
        console.log((theAge * 365) + " Days");
        console.log((theAge * 365) * 24 + " Hours");
        console.log((theAge * 365) * 24 * 60 + " Minutes");
        console.log((theAge * 365) * 24 * 60 * 60 + " Seconds");
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(25); // Months Example => 456 Months