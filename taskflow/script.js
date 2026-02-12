const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-gray-50 px-3 py-2 rounded";

  li.innerHTML = `
    <span>${text}</span>
    <button class="text-red-500">X</button>
  `;

  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
