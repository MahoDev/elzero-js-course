let selectElements = document.querySelectorAll(".a1 .style-select select")
let fontFamilySelect = selectElements[0];
let colorSelect = selectElements[1];
let fontSizeSelect = selectElements[2];
let textInfo = document.querySelector(".text-info");
let a1Styles = {
    fontFamily: "open sans",
    color: "red",
    fontSize: "16px"
};


if(window.localStorage.getItem("a1-styles")){
    a1Styles = JSON.parse(window.localStorage.getItem("a1-styles"));
    let fontFamilyOption = document.querySelector(`.a1 .style-select select option[value="${a1Styles.fontFamily}"]`);
    fontFamilyOption.selected = true;
    textInfo.style.fontFamily = a1Styles["fontFamily"];
    let colorOption = document.querySelector(`.a1 .style-select select option[value="${a1Styles.color}"]`);
    colorOption.selected = true;
    textInfo.style.color = a1Styles["color"];
    let fontSizeOption = document.querySelector(`.a1 .style-select select option[value="${a1Styles.fontSize.slice(0,-2)}"]`);
    fontSizeOption.selected = true;
    textInfo.style.fontSize = a1Styles["fontSize"];
}

fontFamilySelect.addEventListener('change', ()=>{
    textInfo.style.fontFamily = fontFamilySelect.value;
    a1Styles.fontFamily = fontFamilySelect.value;
    window.localStorage.setItem("a1-styles", JSON.stringify(a1Styles));
})
colorSelect.addEventListener('change', ()=>{
    textInfo.style.color = colorSelect.value;
    a1Styles.color = colorSelect.value;
    window.localStorage.setItem("a1-styles", JSON.stringify(a1Styles));
})
fontSizeSelect.addEventListener('change', ()=>{
    textInfo.style.fontSize = `${fontSizeSelect.value}px`;
    a1Styles.fontSize = `${fontSizeSelect.value}px`;
    window.localStorage.setItem("a1-styles", JSON.stringify(a1Styles));
})
