
https://elzero.org/wp-content/themes/elzero/imgs/logo.png

allImgs = document.querySelectorAll("div.a2 img");


//Modify and Add attributes

allImgs.forEach((img)=> {
        //Elzero images not working for some reason but 
        // the code works
        img.setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
        img.alt = "Elzero Logo";
});