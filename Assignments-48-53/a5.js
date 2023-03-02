let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let friendsNotA = []

for(let i = --letter.length; i < friends.length ; i++){
    if(!friends[i].startsWith(letter.toUpperCase())){
        friendsNotA.push(friends[i]);
        // console.log(`"${friendsNotA.length} => ${}"`);
    }
}
for (let i = --letter.length; i < friendsNotA.length ; i++){
    console.log(`"${i + letter.length} => ${friendsNotA[i]}"`);
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"