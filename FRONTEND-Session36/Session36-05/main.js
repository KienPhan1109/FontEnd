const taskInput = document.getElementById("taskName");
const addButton = document.querySelector(".task-input button");

const pendingCol = document.getElementById("pendingTasks");
const inProgressCol = document.getElementById("inProgressTasks");
const doneCol = document.getElementById("doneTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(task) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const content = document.createElement("p");
    content.textContent = task.name;
    taskDiv.appendChild(content);

    if (task.status !== "done") {
        const btn = document.createElement("button");
        btn.textContent = "Chuyển tiếp";
        btn.onclick = () => changeStatus(task.id);
        taskDiv.appendChild(btn);
    }

    return taskDiv;
}

function renderTasks() {
    pendingCol.innerHTML = "";
    inProgressCol.innerHTML = "";
    doneCol.innerHTML = "";

    tasks.forEach(task => {
        const taskEl = createTaskElement(task);
        if (task.status === "pending") {
            pendingCol.appendChild(taskEl);
        } else if (task.status === "in-progress") {
            inProgressCol.appendChild(taskEl);
        } else if (task.status === "done") {
            doneCol.appendChild(taskEl);
        }
    });
}

addButton.addEventListener("click", () => {
    const name = taskInput.value.trim();
    if (name === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    const newTask = {
        id: Date.now(),
        name,
        status: "pending"
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = "";
});

function changeStatus(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (task.status === "pending") {
        task.status = "in-progress";
    } else if (task.status === "in-progress") {
        task.status = "done";
    }

    saveTasks();
    renderTasks();
}

renderTasks();
