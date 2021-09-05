
console.dir (window.document);
var buttonE1=document.querySelector("#save-task");
var taskstodoE1=document.querySelector("#tasks-to-do");
buttonE1.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  });
