const input = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    input.value = "";
  }
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  } else if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
