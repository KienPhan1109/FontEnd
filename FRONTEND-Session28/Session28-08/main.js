// Danh sách nhân viên có sẵn
let employees = [
    { id: 1, name: "Phan Trung Kiên", position: "Chủ tịch", salary: 1000000000 },
    { id: 2, name: "Nguyễn Văn A", position: "Trưởng phòng", salary: 300000000 },
    { id: 3, name: "Nguyễn Văn B", position: "Nhân viên", salary: 5000000 }
];

// Hàm hiển thị danh sách nhân viên
function displayEmployees(employees) {
    employees.forEach((item, index) => {
        console.log(`\nEmployee ${index + 1}:`);
        console.log(`   ID: ${item.id}`);
        console.log(`   Name: ${item.name}`);
        console.log(`   Position: ${item.position}`);
        console.log(`   Salary: ${item.salary}`);
    });
}

// Hàm thêm nhân viên mới
function addEmployees(employees) {
    let id = prompt("Nhập id nhân viên: ");
    let name = prompt("Nhập tên nhân viên: ");
    let position = prompt("Nhập chức vụ nhân viên: ");
    let salary = Number(prompt("Nhập mức lương nhân viên: "));
    
    employees.push({ id, name, position, salary });
    console.log("Thêm nhân viên thành công!");
}

// Hàm xóa nhân viên theo id
function deleteEmployee(employees) {
    let id = Number(prompt("Nhập id nhân viên cần xóa: "));
    let index = employees.findIndex(employee => employee.id === id);

    if (index !== -1) {
        let isConfirmed = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${employees[index].name} không?`);
        if (!isConfirmed) return;

        employees.splice(index, 1);
        console.log("Xóa nhân viên thành công!");
    } else {
        console.log("Không tìm thấy nhân viên với id này!");
    }
}

// Hàm cập nhật mức lương nhân viên theo id
function updateSalary(employees) {
    let id = Number(prompt("Nhập id nhân viên cần cập nhật lương: "));
    let index = employees.findIndex(employee => employee.id === id);

    if (index !== -1) {
        let salary = Number(prompt("Nhập mức lương mới: "));
        employees[index].salary = salary;
        console.log("Cập nhật mức lương thành công!");
    } else {
        console.log("Không tìm thấy nhân viên với id này!");
    }
}

function searchEmployee(employees) {
    let name = prompt("Nhập tên nhân viên cần tìm: ").toLowerCase();
    let result = employees.filter(employee => employee.name.toLowerCase().includes(name));

    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:");
        displayEmployees(result);
    } else {
        console.log("Không tìm thấy nhân viên với tên này!");
    }
}


// Hàm chọn menu
function menuChoice() {
    while (true) {
        console.log("\nMenu:");
        console.log("1. Hiển thị danh sách nhân viên");
        console.log("2. Thêm nhân viên mới");
        console.log("3. Xóa nhân viên theo id");
        console.log("4. Cập nhật mức lương nhân viên theo id");
        console.log("5. Tìm kiếm nhân viên theo tên");
        console.log("6. Thoát");

        let choice = Number(prompt("Nhập lựa chọn của bạn: "));

        if (choice === 6) {
            console.log("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                displayEmployees(employees);
                break;
            case 2:
                addEmployees(employees);
                break;
            case 3:
                deleteEmployee(employees);
                break;
            case 4:
                updateSalary(employees);
                break;
            case 5:
                searchEmployee(employees);
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    }
}

menuChoice();
