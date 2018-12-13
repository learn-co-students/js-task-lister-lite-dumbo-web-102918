
// document.addEventListener("DOMContentLoaded", () => {
//   const taskList = new TaskList();
// });

document.addEventListener("DOMContentLoaded", bindEvent);

function bindEvent(e) {
  let form = document.getElementById('create-task-form');

  form.addEventListener("submit", (submit) => {
    submit.preventDefault();
    let newTask = document.getElementById("new-task-description").value;
    createTask(newTask);

    form.reset();
  });

};

function createTask(task) {
  let ulParentNode = document.getElementById("tasks");
  let liChildNode = document.createElement("li");
  let textNode = document.createTextNode(task);

  liChildNode.appendChild(textNode);
  liChildNode.innerHTML += ` <button type="button">X</button>`;
  liChildNode.querySelector("button").addEventListener("click", (clickEvent) => {
    clickEvent.target.parentNode.remove()});

  ulParentNode.appendChild(liChildNode);
};
