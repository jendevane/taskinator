var taskIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;
  var isEdit = formEl.hasAttribute("data-task-id");
  if (isEdit) {
    var taskId = formEl.getAttibute("data-task-id");
    completeEditTask(taskNameInput, taskTypeInput, taskId);
    var taskSelected = document.querySelector(
      ".task-item [data-task-id='" + taskId + "']"
    );
    taskSelected.querySelector("h3.task-name").textContent = taskName;
    taskSelected.querySelector("span.task-type").textContent = taskType;
    alert("Task Updated!");
    formEl.removeAttribute("data-task-id");
    document.querySelector("#save-task").textContent = "Add Task";
    };
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput,
    };

    createTaskEl(taskDataObj);
  };

  var createTaskEl = function (taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML =
      "<h3 class='task-name'>" +
      taskDataObj.name +
      "</h3><span class='task-type'>" +
      taskDataObj.type +
      "</span>";
    listItemEl.appendChild(taskInfoEl);

    console.dir(listItemEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    tasksToDoEl.appendChild(listItemEl);
    taskIdCounter++;
  };
  var createTaskActions = function (taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.classname = "task-actions";
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);
    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
      var statusOptionEl = document.createElement("option");
      statusOptionEl.textContent = statusChoices[i];
      statusOptionEl.setAttribute("value", statusChoices[i]);
      statusOptionEl.setAttribute("value", statusChoices[i]);

      statusSelectEl.appendChild(statusOptionEl);
    }
    return actionContainerEl;
  };
  var taskButtonHandler = function (event) {
    var targetEl = event.target;
    console.log(event.target);
    if (targetEl.matches(".edit-btn")) {
      var taskId = targetEl.getAttribute("data-task-id");
      editTask(taskId);
    } else if (event.target.matches(".delete-btn")) {
      var taskId = event.target.getAttribute("data-task-id");
      deleteTask(taskId);
    }
  };
  var editTask = function (taskId) {
    console.log("editing task # " + taskId);
    var taskSelected = document.querySelector(
      ".task-item[data-task-id='" + taskId + "']"
    );
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    var taskName = taskSelected.querySelector("span.task-type").textContent;
    document.querySelector("input[name='task-name']").value = taskName;
    document.querySelector("select[name='task-type']").value = taskType;
    document.querySelector("#save-task").textContent = "Save Task";
    formEl.setAttribute("data-task-id", taskId);
  };

  var deleteTask = function (taskId) {
    var taskSelected = document.querySelector(
      ".task-item[data-task-id='" + taskId + "']"
    );
    taskSelected.remove();
};
pageContentEl.addEventListener("change",taskStatusChangeHandler);
  pageContentEl.addEventListener("click", taskButtonHandler);
  formEl.addEventListener("submit", taskFormHandler)
