let number1 = 9;
let str = "9";
let str2 = "20";

if(number1 == str){
    console.log(`${number1} Is The Same Value As ${str}`);
}
if(number1 !== str){
    console.log(`${number1} Is The Same Value As ${str} But Not The Same Type`);
}
if(number1 != str2 && typeof number1 != typeof str2){
    console.log(`${number1} Is Not The Same Value Or The Same Type As ${str2}`);
}
if(str != str2 && typeof str == typeof str2){
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}


// Output
"{number1} Is The Same Value As {str}"
"{number1} Is The Same Value As {str} But Not The Same Type"
"{number1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"