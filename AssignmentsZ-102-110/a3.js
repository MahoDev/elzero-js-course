let divA3 = document.querySelector(".assignment3");

let id = window.setInterval(()=>{
    if(divA3.textContent == 0){
        window.clearInterval(id);
    }else{
        divA3.textContent -= 1;
    }
},1000)