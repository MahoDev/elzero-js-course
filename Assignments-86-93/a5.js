let imgs = document.querySelectorAll("div.a5 img");

imgs.forEach((element) => {
    if(element.hasAttribute("alt")){
        element.alt = "Old";
    }
    else{
        element.alt = "Elzero New";
    }
});