const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg";

  const span = document.createElement("span");
  span.textContent = text;
  span.className = "cursor-pointer";
  span.addEventListener("click", () => {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-400");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className =
    "text-red-500 hover:text-red-700 font-bold";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}
