let list = [{ id: 1, name: "Học DOM JS" }];

function displayLists() {
    let list = JSON.parse(localStorage.getItem("list")) || [];

    let container = document.querySelector(".container_tr");
    container.innerHTML = "";

    list.forEach((l, index) => {
        let tr = document.createElement("div");
        tr.classList.add("tr");

        tr.innerHTML = `
            <div class="text">${l.name}</div>
            <div class="container_btn">
                <button class="update" onclick="updateList(${index})">Sửa</button>
                <button class="del" onclick="delList(${index})">Xóa</button>
            </div>
        `;

        container.appendChild(tr);
    });
}

function delList(index) {
    let list = JSON.parse(localStorage.getItem("list")) || [];
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));
    displayLists();
}

function updateList(index) {
    let list = JSON.parse(localStorage.getItem("list")) || [];
    let newName = prompt("Nhập tên mới:", list[index].name);
    if (newName !== null && newName.trim() !== "") {
        list[index].name = newName;
        localStorage.setItem("list", JSON.stringify(list));
        displayLists();
    }
}

function addTask() {
    let input = document.getElementById("name");
    let name = input.value.trim();

    if (name === "") {
        alert("Vui lòng nhập nội dung nhiệm vụ!");
        return;
    }

    let list = JSON.parse(localStorage.getItem("list")) || [];

    let id = list.length > 0 ? Math.max(...list.map((item) => item.id)) + 1 : 1;

    let newTask = {
        id: id,
        name: name,
    };

    list.push(newTask);
    localStorage.setItem("list", JSON.stringify(list));
    input.value = "";
    displayLists();
}
document.getElementById('btn').addEventListener('click', addTask);
displayLists();
