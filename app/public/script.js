function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  const li = document.createElement("li");
  li.innerHTML = task + " <button onclick='this.parentElement.remove()'>Delete</button>";

  document.getElementById("taskList").appendChild(li);
}
