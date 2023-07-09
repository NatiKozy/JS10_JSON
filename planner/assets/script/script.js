let task = document.getElementById('task');
let taskList = document.getElementById('task-list');
let addBtn = document.getElementById('add');
let clearBtn = document.getElementById('clear');

console.log(clearBtn);
console.log(add);

// document.addEventListener('DOMContentLoaded', function(event) {
//     let isTask = localStorage.getItem('task');
//     if (isTask!=null)
//     {
//         document.getElementById('task-list').value = isTask;
//     }
// })

function addTask() {
    if (task.value == 0) {
        alert('Введите задачу')
    } else {
        let li = document.createElement('li');
        li.classList.add('li');
        li.innerHTML = task.value;
        taskList.append(li);
        // localStorage.setItem('task');
    // taskList.innerHTML +=
    // `<input type='text' value=${task}>
    // <input type='radio' `;
    }
}

function noTasks () {
    if (task.value !== '') {
        let noTask = document.getElementById('notasks');
        noTask.classList.add('none')
}
}

function checkTask() {
    let taskValue = document.getElementById('task').value;

    if (localStorage.getItem('task')==null)
    {
        localStorage.setItem('task', taskValue);
    }
    let noTask = document.getElementById('notasks')
    addTask(taskValue);
    noTasks(noTask);
}


task.oninput = function() {
    if (task.value === '') {
        clearBtn.setAttribute('disabled', true);
    } else {
        clearBtn.removeAttribute('disabled');
    }
}

// function updateStorage () {

// }

clearBtn.addEventListener('click', function clear(){
    taskList.innerHTML == '';
})

addBtn.addEventListener('click', checkTask);

// localStorage.setItem('task', task);
// let todos = [];
// todos.push(task);
// localStorage.setItem('taskList', JSON.stringify(taskList));
// const taskListString = localStorage.getItem('taskList');
// todos = JSON.parse(taskListString);
// const todosArray = Array.from(todos);
// todosArray.forEach(task =>sendTask(task));

