const btn = document.getElementById("btn");
const table = document.getElementById("table");
const name = document.getElementById("name");
let count = 4;

btn.addEventListener("click", function () {
    if (name.value) {
        table.innerHTML += `
        <tr>
            <td>${count++}. ${name.value}</td>
        </tr>
    `;
        name.value = "";
    } else {
        alert("Tên môn học không được để trống!");
    }
});
