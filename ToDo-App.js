const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')

//console.log(todoForm, todoInput, todoList);

const addTodo = text => {

    if (!text.trim()) {
     return
}

   const li = document.createElement('li')
   const span = document.createElement('span')
   const deleteBtn = document.createElement('button')

   span.textContent = Input
   span.classList = 'todo-text'

    deleteBtn.textContent = 'x'
   deleteBtn.classList = 'delete-button'

   li.appendChild(span)
    li.appendChild(deleteBtn)   

    deleteBtn.addEventListener('click', () => {
        li.remove();
    })


    todoList.appendChild(li);
}

todoForm.addEventListener('submit', e => {
    e.preventDefault(); 

    //console.log(todoInput.value);

    addTodo (todoInput.value);

    todoForm.reset();
});
