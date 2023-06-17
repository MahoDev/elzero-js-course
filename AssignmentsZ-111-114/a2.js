let fnameField = document.querySelector(".a2 #fname");
let lnameField = document.querySelector(".a2 #lname");
let ageField = document.querySelector(".a2 #age");
let specialtySelect = document.querySelector(".a2 #s4");
let a2FormData = {
    fname:"",
    lname:"",
    age:"",
    specialty:""
};

if(this.sessionStorage.getItem("a2FormData")){
    a2FormData = JSON.parse(sessionStorage.getItem("a2FormData"));
    if(a2FormData.specialty === ""){
        a2FormData.specialty = "front end"; 
        sessionStorage.setItem("a2FormData",JSON.stringify(a2FormData));
    }
    fnameField.value = a2FormData.fname;
    lnameField.value = a2FormData.lname;
    ageField.value = a2FormData.age;
    specialtySelect.value = a2FormData.specialty;
}


fnameField.addEventListener('blur', ()=>{
    if(fnameField.value !== ""){
        a2FormData.fname = fnameField.value;
        window.sessionStorage.setItem("a2FormData", JSON.stringify(a2FormData));
    }
})

lnameField.addEventListener('blur', ()=>{
    if(lnameField.value !== ""){
        a2FormData.lname = lnameField.value;
        window.sessionStorage.setItem("a2FormData", JSON.stringify(a2FormData));
    }
})
ageField.addEventListener('blur', ()=>{
    if(ageField.value !== ""){
        a2FormData.age = ageField.value;
        window.sessionStorage.setItem("a2FormData", JSON.stringify(a2FormData));
    }
})
specialtySelect.addEventListener('change', ()=>{
    a2FormData.specialty = specialtySelect.value;
    window.sessionStorage.setItem("a2FormData", JSON.stringify(a2FormData));
})