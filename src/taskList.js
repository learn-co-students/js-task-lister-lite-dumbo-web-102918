// class TaskList {
function addToList(inputVal) {
    const ul = document.getElementById('tasks');
    const li = document.createElement("li");
  li.appendChild(document.createTextNode(inputVal));
    ul.appendChild(li);
}

// }
