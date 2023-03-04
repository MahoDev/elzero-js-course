function sayHello(theName, theGender) {
    let toPrint = "Hello " ;
    if(theGender == undefined) {console.log(toPrint += theName); return;}
    toPrint = theGender == "Male" ? toPrint + "Mr " + theName : toPrint + "Miss " + theName;
    console.log(toPrint);
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"