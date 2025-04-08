let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false },
];

function displayList() {
    let list = document.querySelector("#myUL");
    list.innerHTML = "";

    todoList.forEach((t) => {
        let listItem = document.createElement("li");

        if (t.completed) {
            listItem.classList.add("checked");
        }

        listItem.innerHTML = `
            ${t.task} <span class="close">X</span>
        `;

        listItem.addEventListener("click", () => {
            toggleComplete(t.id);
        });

        listItem.querySelector(".close").addEventListener("click", (event) => {
            event.stopPropagation();
            removeTask(t.id);
        });

        list.appendChild(listItem);
    });
}

function removeTask(id) {
    todoList = todoList.filter((t) => t.id !== id);
    displayList();
}

function toggleComplete(id) {
    let task = todoList.find((t) => t.id === id);
    if (task) {
        task.completed = !task.completed;
        displayList();
    }
}

function add() {
    let inputElement = document.getElementById("myInput");
    let value = inputElement.value.trim();

    if (value === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    let newTask = {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
        task: value,
        completed: false,
    };

    todoList.push(newTask);
    displayList();
    inputElement.value = "";
}

document.querySelector(".addBtn").addEventListener("click", add);
document.addEventListener("DOMContentLoaded", displayList);
