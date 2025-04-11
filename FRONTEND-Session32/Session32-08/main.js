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
        <div class="container_btn">
            <button class="update">Sửa</button>
            <button class="del">Xóa</button>
        </div>
    `;

    task.querySelector(".del").addEventListener("click", () => {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
        if (confirmDelete) {
            container.removeChild(task);
        } else {
            alert("Hủy xóa!");
        }
    });

    task.querySelector(".update").addEventListener("click", () => {
        const currentText = task.querySelector(".text").innerText;
        const newText = prompt("Nhập nhiệm vụ mới:", currentText);
        if (newText !== null && newText.trim() !== "") {
            task.querySelector(".text").innerText = newText.trim();
        } else if (newText !== null) {
            alert("Nội dung không được để trống!");
        }
    });
    container.appendChild(task);
    name.value = "";
}

btn.addEventListener("click", function () {
    addTask(name.value);
});
