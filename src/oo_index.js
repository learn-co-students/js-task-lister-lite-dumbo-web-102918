
// document.addEventListener("DOMContentLoaded", () => {
//   const taskList = new TaskList();
// });
let form = document.querySelector('form').addEventListener("submit", function(event){
  event.preventDefault()
  let value= document.getElementById('new-task-description').value
  let list = document.getElementById('tasks');
  let element = document.createElement("li")
  element.innerText = value;
  console.log(element)
  list.appendChild(element);
})
