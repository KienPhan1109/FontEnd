let employees = [
    { name: "Nguyễn Văn A", position: "Developer" },
    { name: "Trần Thị B", position: "Designer" },
    { name: "Phạm Văn C", position: "Project Manager" },
    { name: "Lê Thị D", position: "QA Engineer" },
    { name: "Vũ Văn E", position: "DevOps" },
    { name: "Hoàng Thị F", position: "HR Manager" },
    { name: "Ngô Văn G", position: "Business Analyst" },
    { name: "Đỗ Thị H", position: "Scrum Master" },
    { name: "Trịnh Văn I", position: "UI/UX Designer" },
    { name: "Phan Thị J", position: "Tester" },
];

const maxPerPage = 3;
let currentPage = 1;

function renderTable() {
    const start = (currentPage - 1) * maxPerPage;
    const end = start + maxPerPage;
    const displayEmployees = employees.slice(start, end);

    const tbody = document.getElementById("employeeTable");
    tbody.innerHTML = "";

    displayEmployees.forEach((emp, index) => {
        const row = `<tr>
        <td>${start + index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        </tr>`;
        tbody.innerHTML += row;
    });

    renderPagination();
}

function renderPagination() {
    const pageCount = Math.ceil(employees.length / maxPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    pagination.innerHTML += `<button onclick="changePage(${currentPage - 1})" ${
        currentPage === 1 ? "disabled" : ""
    }>Previous</button>`;

    for (let i = 1; i <= pageCount; i++) {
        pagination.innerHTML += `<button onclick="changePage(${i})" class="${
            i === currentPage ? "active" : ""
        }">${i}</button>`;
    }

    pagination.innerHTML += `<button onclick="changePage(${currentPage + 1})" ${
        currentPage === pageCount ? "disabled" : ""
    }>Next</button>`;
}

function changePage(page) {
    const totalPages = Math.ceil(employees.length / maxPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
    }
}

function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const position = document.getElementById("position").value.trim();

    if (name && position) {
        employees.push({ name, position });
        document.getElementById("name").value = "";
        document.getElementById("position").value = "";
        currentPage = Math.ceil(employees.length / maxPerPage);
        renderTable();
    } else {
        alert("Vui lòng nhập đầy đủ tên và chức vụ.");
    }
}

renderTable();
