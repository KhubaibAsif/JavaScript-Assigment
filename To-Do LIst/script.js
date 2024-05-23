let todos = [];
let todoForm = document.querySelector('.todo-form');
let todoInput = document.querySelector('.todo-input');
let todoItemsList = document.querySelector('.todo-items');
let todoAlert = document.querySelector('.todo-alert');

// function to add a new todo item
function addTodo(todoItem) {
    let newTodo = {
        id: todos.length + 1,
        name: todoItem,
        completed: false
    };
    todos.push(newTodo);
    addToLocalStorage(todos);
    renderTodos(todos);
}

// function to render todo items
function renderTodos(todos) {
    todoItemsList.innerHTML = '';
    todos.forEach(function(todo) {
        let todoItem = document.createElement('li');
        todoItem.textContent = todo.name;
        if (todo.completed) {
            todoItem.classList.add('completed');
        }
        todoItemsList.appendChild(todoItem);
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTodo(todo.id);
        };
        todoItem.appendChild(deleteButton);
        let completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function() {
            toggle(todo.id);
        };
        todoItem.appendChild(completeButton);
    });
}

// function to toggle the completed status of a todo item
function toggle(id) {
    todos.forEach(function(todo) {
        if (todo.id == id) {
            todo.completed = !todo.completed;
        }
    });
    addToLocalStorage(todos);
    renderTodos(todos);
}

// function to delete a todo item
function deleteTodo(id) {
    todos = todos.filter(function(todo) {
        return todo.id != id;
    });
    addToLocalStorage(todos);
    renderTodos(todos);
}

// function to add todos to local storage
function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// function to get todos from local storage
function getFromLocalStorage() {
    let storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        renderTodos(todos);
    }
}

// function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    let todoItem = todoInput.value.trim();
    if (todoItem) {
        addTodo(todoItem);
        todoInput.value = '';
    } else {
        showAlert('Please enter a task');
    }
}

// function to show an alert message
function showAlert(message) {
    todoAlert.textContent = message;
    todoAlert.classList.add('toggleMe');
    setTimeout(function() {
        todoAlert.classList.remove('toggleMe');
    }, 3000);
}

// event listeners
todoForm.addEventListener('submit', handleFormSubmit);

// get todos from local storage
getFromLocalStorage();