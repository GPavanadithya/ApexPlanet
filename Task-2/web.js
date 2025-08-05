// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate name
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validate message
    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

// Todo List Functionality
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        addTodoItem(taskText);
        todoInput.value = '';
        todoInput.focus();
    }
});

function addTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const button = document.createElement('button');
    button.className = 'delete-btn';
    button.textContent = 'Delete';
    button.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}