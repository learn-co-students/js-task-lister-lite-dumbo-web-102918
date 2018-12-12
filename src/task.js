// class Task {
    let form = document.getElementById('create-task-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let inputVal = document.getElementById('new-task-description').value
        console.log(inputVal)
        addToList(inputVal);
    })
// }


