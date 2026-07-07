const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Show tasks on page load
window.onload = () => showTasks();

function addTask() {
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  showTasks();
}

function showTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li class="list-group-item">
        ${task}
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Delete</button>
      </li>`;
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}
