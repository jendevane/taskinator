
console.dir (window.document);
var formE1=document.querySelector("#task-form");
var taskstodoE1=document.querySelector("#tasks-to-do");
var createTaskHandler=function(event){
    event.preventDefalt();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "tasknameInput";
    taskstodoE1.appendChild(listItemEl);
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.dir(taskNameInput);
     };
     formE1= addEventListener("submit", createTaskHandler);
    