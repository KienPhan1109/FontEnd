const name = document.getElementById("name");
const btn = document.getElementById("btn");
const container = document.querySelector(".container_tr");

function addTask(taskName) {
    if (!taskName.trim()) {
        alert("Nhiệm vụ không được để trống!");
        return;
    }

    const task = document.createElement("div");
    task.className = "tr";
    task.innerHTML = `
        <div class="text">${taskName}</div>
        <button class="del">X</button>
    `;

    task.querySelector(".del").addEventListener("click", () => {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
        if (confirmDelete) {
            container.removeChild(task);
        } else {
            alert("Hủy xóa!");
        }
    });

    container.appendChild(task);
    name.value = "";
}

btn.addEventListener("click", function () {
    addTask(name.value);
});
