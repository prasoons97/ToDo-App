const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')

//console.log(todoForm, todoInput, todoList);

const addTodo = input => {

    if (!input.trim()) {
     return
}

   const li = document.createElement('li')
   const div = document.createElement('div')
   const checkbox = document.createElement('input')
   const span = document.createElement('span')
   const deleteBtn = document.createElement('button')

   checkbox.type = 'checkbox'
    checkbox.classList = 'custom-checkbox'

   span.textContent = input
   span.classList = 'todo-text'

    deleteBtn.textContent = 'x'
   deleteBtn.classList = 'delete-button'

   div.appendChild(checkbox)
   div.appendChild(span)

   li.appendChild(div)
    li.appendChild(deleteBtn)   

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through'
        } else {
            span.style.textDecoration = 'none'
        }
    })

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
