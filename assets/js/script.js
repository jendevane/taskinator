
console.dir (window.document);
var buttonE1=document.querySelector("#save-task");
var taskstodoE1=document.querySelector("#tasks-to-do");
var createTaskHandler=function(){

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskstodoE1.appendChild(listItemEl);
     };
     buttonE1.addEventListener("click", createTaskHandler);
    