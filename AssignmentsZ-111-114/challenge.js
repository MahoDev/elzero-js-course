let inputField = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let tasksContainer = document.querySelector(".tasks");
let taskListData = [
    
];
const generateRandomNumberString = (length) =>
  [...Array(length)].map(() => Math.floor(Math.random() * 10)).join("");


//load stored tasks.
if(localStorage.getItem("taskListData")){
    let tasks = JSON.parse(localStorage.getItem("taskListData"));
    for (let i = 0; i < tasks.length; i++) {
      addTask(tasks[i].title, tasks[i].id);
    }
}

function addTask(info, taskId = ""){
    if(info !== ""){
        let task = createTask(info, taskId);
        taskListData.push({id: task.getAttribute("task-id"), title: info});
        //To avoid unneeded setting, we only add to local storage
        //when there's no taskId sent. We send taskId when we
        //are loading already stored tasks at page opening.
        if (taskId == "")
            window.localStorage.setItem("taskListData", JSON.stringify(taskListData));

        tasksContainer.appendChild(task);
    }
}

function createTask(info, taskId =""){
    let task = document.createElement("div");
    task.textContent = info;
    task.classList.add("task");
    let deleteBtn = document.createElement("div");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    if (taskId == "") {
        taskId = generateRandomNumberString(10);
        task.setAttribute("task-id", taskId);
    } else task.setAttribute("task-id", taskId);    
    task.appendChild(deleteBtn);
    return task;
}


addBtn.addEventListener('click', ()=>{
   addTask(inputField.value); 
   inputField.value = "";
});

tasksContainer.addEventListener('click', (event)=>{
    if(event.target.classList.contains("deleteBtn")){
        taskListData = JSON.parse(localStorage.getItem("taskListData"));
        taskListData = taskListData.filter((e) => {
          return e["id"] !== event.target.parentElement.getAttribute("task-id");
        });
        window.localStorage.setItem(
          "taskListData",
          JSON.stringify(taskListData)
        );
        event.target.parentElement.remove();
    }
});
