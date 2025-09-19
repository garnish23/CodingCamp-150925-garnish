const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const taskList = document.getElementById('task-list');
const deleteAllBtn = document.getElementById('delete-all-btn');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${task.text} - ${task.date}</span>
            <button onclick="deleteTask(${index})">Hapus</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;

    if (taskText === '' || taskDate === '') {
        alert('Tugas dan tanggal harus diisi!');
        return;
    }

    const newTask = { text: taskText, date: taskDate };
    tasks.push(newTask);

    taskInput.value = '';
    dateInput.value = '';

    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function deleteAllTasks() {
    tasks = [];
    renderTasks();
}

taskForm.addEventListener('submit', addTask);
deleteAllBtn.addEventListener('click', deleteAllTasks);