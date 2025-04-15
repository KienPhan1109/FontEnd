const name = document.getElementById("name");
const btn = document.getElementById("btn");
const container = document.querySelector(".container_tr");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    container.innerHTML = "";
    tasks.forEach((taskName, index) => {
        const task = document.createElement("div");
        task.className = "tr";
        task.innerHTML = `
            <div class="text">${taskName}</div>
            <div class="container_btn">
                <button class="update">Sửa</button>
                <button class="del">Xóa</button>
            </div>
        `;

        task.querySelector(".del").addEventListener("click", () => {
            const confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
            if (confirmDelete) {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            } else {
                alert("Hủy xóa!");
            }
        });

        task.querySelector(".update").addEventListener("click", () => {
            const currentText = tasks[index];
            const newText = prompt("Nhập nhiệm vụ mới:", currentText);
            if (newText !== null && newText.trim() !== "") {
                tasks[index] = newText.trim();
                saveTasks();
                renderTasks();
            } else if (newText !== null) {
                alert("Nội dung không được để trống!");
            }
        });

        container.appendChild(task);
    });
}

function addTask(taskName) {
    if (!taskName.trim()) {
        alert("Nhiệm vụ không được để trống!");
        return;
    }

    tasks.push(taskName.trim());
    saveTasks();
    renderTasks();
    name.value = "";
}

btn.addEventListener("click", function () {
    addTask(name.value);
});

renderTasks();
