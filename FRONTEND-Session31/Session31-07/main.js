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
    list.innerHTML = '';

    todoList.forEach(t => {
        let listItem = document.createElement("li");

        if (t.completed) {
            listItem.classList.add("checked");
        }

        listItem.innerHTML = `
            ${t.task} <span class="close">X</span>
        `;

        listItem.querySelector(".close").addEventListener("click", () => {
            removeTask(t.id);
        });

        list.appendChild(listItem);
    });


}

function removeTask(id) {
    todoList = todoList.filter(t => t.id !== id);
    displayList();
}

document.addEventListener("DOMContentLoaded", displayList);