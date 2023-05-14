let addField = document.querySelector(".classes-to-add");
let removeField = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector("[title='Current']");
let classesDisplayer = document.querySelector(".classes-list div");

addClasses(currentElement.classList, true);
console.log(typeof(currentElement.classList));



addField.addEventListener('blur',(event)=>{
    if(event.target.value.trim() !== ""){
        let classes = event.target.value.trim();
        classes = classes.toLowerCase();
        let toAdd = classes.split(" ");
        addClasses(toAdd);
        event.target.value = "";
    }

});
removeField.addEventListener('blur',(event)=>{
    if(event.target.value.trim() != ""){
        let classes = event.target.value.trim();
        classes = classes.toLowerCase();
        let toRemove = classes.split(" ");
        removeClasses(toRemove);
        event.target.value = "";
    }

});

function addClasses(classes, isFirstCall = false){
    if (classes != null && classes.length != 0){
        //delete "no classes to show" message
        let msg = document.querySelector(".empty-container");
        if (msg !== null) msg.remove();

        //display the classes as elements
        if (isFirstCall){
            classes.forEach((e)=>{
                let classElement = document.createElement("span");
                classElement.innerText = e;
                classesDisplayer.appendChild(classElement);
            })
            return;
        }
        classes.forEach((e)=>{
            //makes sure no duplicate classes are added
            if(!currentElement.classList.contains(e)){
                let classElement = document.createElement("span");
                classElement.innerText = e;
                classesDisplayer.appendChild(classElement);
            }
        });
        //adds to class attribute
        currentElement.classList.add(...classes); 
    }
    
}
function removeClasses(classes){
    if (classes != null && classes.length != 0){
        //Removes from class attribute
        currentElement.classList.remove(...classes); 
        //removes the displayed elements.
        let children = [...classesDisplayer.children];
        children.forEach((e)=>{
            classes.forEach((className)=>{if(className === e.innerText) classesDisplayer.removeChild(e);})
        });
        if(classesDisplayer.children.length == 0){
            let classElement = document.createElement("p");
            classElement.className ="empty-container"
            classElement.innerText = "No Classes To Show";
            classesDisplayer.appendChild(classElement); 
        }
    }
}