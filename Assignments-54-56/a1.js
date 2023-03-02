let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let friendsList = [];


console.log("test")
while(counter < friends.length){
    if(typeof friends[counter] != "number" && friends[counter][index] != "A" ){
        friendsList.push(friends[counter]);
    }
    counter++;
}
while(index < friendsList.length){
    let i = index;
    console.log(`"${++index} => ${friendsList[i]}"`);
}

// Output
"1 => Sayed"
"2 => Mahmoud"