const todoForm = document.querySelector("#todo-form"); //finds elements in your HTML using CSS selectors.
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

//console.log(todoForm, todoInput, todoList);

const addTodo = (input, isCompleted = false) => {
  //function to add a new todo item
  if (!input.trim()) {
    return;
  }

  const li = document.createElement("li");
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  checkbox.classList = "custom-checkbox";
  checkbox.checked = isCompleted;

  //Sets the text style to immediately if completed
  if (isCompleted) {
    span.style.textDecoration = "line-through";
  }

  span.textContent = input;
  span.classList = "todo-text";

  deleteBtn.textContent = "x";
  deleteBtn.classList = "delete-button";

  div.appendChild(checkbox);
  div.appendChild(span);

  li.appendChild(div);
  li.appendChild(deleteBtn);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
    saveTodos(); // save changes
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTodos(); // save changes
  });

  todoList.appendChild(li);
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //console.log(todoInput.value);

  addTodo(todoInput.value);
  saveTodos();

  todoForm.reset();
});

//NEW FUNCTION: Save todos to local storage
const saveTodos = () => {
  //Create an empty array that will will later hold my todo objects
  const todosToSave = [];
  //go through each <li> element under my <ul> and push towards my array
  todoList.querySelectorAll("li").forEach((li) => {
    const span = li.querySelector(".todo-text");
    const checkbox = li.querySelector(".custom-checkbox");

    //create an object for each todo item
    const todoItem = {
      text: span.textContent,
      completed: checkbox.checked,
    };
    //add the object to the array
    todosToSave.push(todoItem);
  });
  //Save the array to local storage as a string
  localStorage.setItem("todos", JSON.stringify(todosToSave));
};

//NEW FUNCTION: Load todos from local storage when the page loads  
const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  //go through each todo item and add it to the list
  todos.forEach((todoItem) => addTodo(todoItem.text, todoItem.completed));
};
//Run the loadTodos() function immediately after the page has loaded
document.addEventListener("DOMContentLoaded", loadTodos);
