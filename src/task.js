// class Task {
// }
const input = document.getElementById('new-task-description');
const ulTasks = document.getElementById("tasks")
const form = document.querySelector('form');

function removeMe(event){
  event.target.parentNode.remove()
}

function createTask(event){
  event.preventDefault();
  let newTask = document.createElement("li")
  newTask.innerHTML =  `${input.value} <button type= 'button' data-description="${input.value}">X</button>`
  ulTasks.append(newTask)
  let btn = newTask.querySelector("button");
  btn.addEventListener("click", removeMe)
  event.target.reset();
}


form.addEventListener('submit', createTask)
