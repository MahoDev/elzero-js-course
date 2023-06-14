let a5Id = window.setInterval(()=>{
    if(divA3.textContent == 5){
        window.clearInterval(a5Id);
        window.open("elzero.org","_blank", "width=350,height=450");
    }
},1000);