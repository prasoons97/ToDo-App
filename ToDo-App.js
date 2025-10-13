const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')

const addTodo = text => {

    if (!text.trim()) {
     return
}

   const li = document.createElement('li')
    li.textContent = todoInput.value

    todoList.appendChild(li);
}

todoForm.addEventListener('submit', e => {
    e.preventDefault(); 

    addTodo (todoInput.value);

    todoForm.reset();
});