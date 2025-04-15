// Dữ liệu mẫu xài một lần
// let products = [
//     { id: "DM001", name: "Quần áo", state: true },
//     { id: "DM002", name: "Kính mắt", state: false },
//     { id: "DM003", name: "Giày dép", state: true },
//     { id: "DM004", name: "Thời trang nam", state: false },
//     { id: "DM005", name: "Thời trang nữ", state: false },
//     { id: "DM006", name: "Hoa quả", state: false },
//     { id: "DM007", name: "Rau", state: true },
//     { id: "DM008", name: "Điện thoại", state: false },
// ];

// localStorage.setItem("products", JSON.stringify(products)) || [];

let products = JSON.parse(localStorage.getItem("products"));
let editIndex = -1;

function displayProducts(products) {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    products.forEach((product, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td scope="row">${product.id}</td>
            <td class="col-4">${product.name}</td>
            <td>
                <span class="status ${product.state ? "active" : "inactive"}">
                    <span class="dot"></span> ${product.state ? "Đang hoạt động" : "Ngừng hoạt động"}
                </span>
            </td>
            <td>
                <div class="d-flex align-items-center gap-4 justify-content-start text-center">
                    <i class="fas fa-trash-alt text-danger" role="button" onclick="deleteProduct(${index})"></i>
                    <i class="fas fa-edit text-warning" role="button" onclick="editProduct(${index})"></i>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
function editProduct(index) {
    editIndex = index;
    let product = products[index];

    document.getElementById('editId').value = product.id;
    document.getElementById('editName').value = product.name;
    document.getElementById('editState').value = product.state;
    let modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

function saveEdit() {
    if (editIndex >= 0) {
        products[editIndex].name = document.getElementById('editName').value;
        products[editIndex].state = document.getElementById('editState').value === "true";

        localStorage.setItem("products", JSON.stringify(products));
        displayProducts(products);

        bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    }
}


function deleteProduct(index) {
    if (confirm("Bạn có chắc muốn xóa danh mục này không?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        displayProducts(products);
    }
}

function addProduct() {
    let id = document.getElementById('addId').value.trim();
    let name = document.getElementById('addName').value.trim();
    let state = document.getElementById('addState').value === "true";

    if (!id || !name) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (products.some(p => p.id === id)) {
        alert("Mã danh mục đã tồn tại!");
        return;
    }

    products.push({ id, name, state });
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products);

    bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();
    document.getElementById('addForm').reset();
}

document.getElementById('search').addEventListener('input', function () {
    let keyword = this.value.toLowerCase().trim();
    let filtered = products.filter(product => product.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
});

document.querySelector('select.form-select').addEventListener('change', function () {
    let value = this.value;
    let filtered = products;

    if (value === 'enable') filtered = products.filter(p => p.state === true);
    else if (value === 'disable') filtered = products.filter(p => p.state === false);

    displayProducts(filtered);
});


displayProducts(products);