let start6 = 0;
let swappedName = "elZerO";

for (let i = start6 ; i < swappedName.length; i++){
    if(swappedName[i] == swappedName[i].toLowerCase()){
        swappedName=  swappedName.replace(swappedName[i] , swappedName[i].toUpperCase());
    }
    else{
        swappedName= swappedName.replace(swappedName[i] , swappedName[i].toLowerCase());
    }
}
console.log(swappedName);

/*Output
"ELzERo" */