function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;   //apan li element craete karto ahe ani techya madhe apan tasttext bharto ahe as an element

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";  // ikda pan same ek button creatre kela ani techya madhe X (text) as an element bharla
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}