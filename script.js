function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

    let li = document.createElement("li");

    // Add task text
    let span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Add X button to toggle completed state
    let toggleBtn = document.createElement("button");
    toggleBtn.textContent = "X";
    toggleBtn.onclick = function() {
      li.classList.toggle("completed-task");
    };
    li.appendChild(toggleBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
