document.addEventListener('DOMContentLoaded', () => {
  console.log('Boxes loaded');

  const addBoxBtn = document.getElementById('add-box-btn');
  addBoxBtn.addEventListener('click', addBox);
  console.log(addBoxBtn);

  const addTaskBtn = document.getElementById('add-task-btn');
  addTaskBtn.addEventListener('click', addTask);

});

function addBox() {
  // <div class="box m-1"></div>
  const box = document.createElement('div');
  box.classList.add('box');
  box.classList.add('m-1');
  box.style.backgroundColor = randomColor();
  console.log(box);

  const boxContainer = document.querySelector('.box-container');
  boxContainer.append(box);
}

function addTask() {
  const taskInput = document.querySelector('[name="task"]');
  const taskText = taskInput.value.trim();
  if (taskText) {
    taskInput.value = '';
    console.log(taskText);

    // Creamos la tarea
    const task = document.createElement('li');
    task.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    task.append(document.createTextNode(taskText));
    
    // Creamos contenedor de acciones de la tarea
    const taskActions = document.createElement('span');
    taskActions.classList.add('task-actions');
    
    // Creamos botón de borrar
    const deleteTaskBtn = document.createElement('i');
    deleteTaskBtn.classList.add('fa', 'fa-times', 'text-danger', 'delete-task-btn');
    deleteTaskBtn.setAttribute('role', 'button'); // Para que salga la manita!!
    deleteTaskBtn.addEventListener('click', deleteTask);
    // Añadimos botón de borrar al contenedor de acciones
    taskActions.append(deleteTaskBtn);

    // Creamos botón de completar
    const doneTaskBtn = document.createElement('i');
    doneTaskBtn.classList.add('fa', 'fa-check', 'text-success', 'done-task-btn');
    doneTaskBtn.setAttribute('role', 'button'); // Para que salga la manita!!
    doneTaskBtn.addEventListener('click', completeTask);
    // Añadimos el botón de completar al contenedor de acciones
    taskActions.append(doneTaskBtn);

    // Añadimos el contenedor de acciones a la tarea
    task.append(taskActions);
    console.log(task);

    // Añadimos la tarea a la lista de tareas
    const taskList = document.getElementById('task-list');
    taskList.append(task);
  }
}

function deleteTask(event) {
  console.log(event);
  const deleteTaskBtn = event.target;
  deleteTaskBtn.parentNode.parentNode.remove();
}

function completeTask(event) {
  const doneTaskBtn = event.target;
  const task = doneTaskBtn.parentNode.parentNode;
  task.classList.add('task-completed')
}

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.random();
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}