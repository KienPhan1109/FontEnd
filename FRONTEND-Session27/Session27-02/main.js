let students = [];
function inputStudents() {
    let n = Number(prompt("\nNhập vào số lượng sinh viên"));
    for (let i = 0; i < n; i++) {
        students[i] = prompt("\nNhập tên sinh viên thứ " + (i + 1));
    }
    console.log("\nThêm sinh viên thành công!");
}

function displayStudents() {
    console.log("\nDanh sách sinh viên");
    for (let i = 0; i < students.length; i++) {
        console.log(`\n${i + 1}. ${students[i]}`);
    }
}

function foundStudent() {
    let name = prompt("\nNhập tên sinh viên cần tìm");
    let found = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].includes(name)) {
            console.log("\nTìm thấy sinh viên!");
            console.log(`\n${i + 1}. ${students[i]}`);
            found = 1;
        }
    }
    if (!found) console.log("Sinh viên không có trong danh sách!");
}

function delStudent() {
    let found = 0;
    let name = prompt("\nNhập tên sinh viên cần xóa");
    for (let i = 0; i < students.length; i++) {
        if (students[i] === name) {
            students[i].splice(i, 1);
            console.log("\nXóa sinh viên thành công!");
            found = 1;
            break;
        }
    }

    if (!found) console.log("Sinh viên không có trong danh sách!");
}

function inputChoice() {
    return Number(prompt("Nhập vào lựa chọn: "));
}

while (true) {
    console.log("\n1. Nhập danh sách sinh viên.");
    console.log("\n2. Hiển thị danh sách sinh viên.");
    console.log("\n3. Tìm sinh viên theo tên.");
    console.log("\n4. Xóa sinh viên khỏi danh sách.");
    console.log("\n5. Thoát.");
    let choice = inputChoice();

    if (choice === 5) break;

    switch (choice) {
        case 1:
            inputStudents();
            break;
        
        case 2:
            displayStudents();
            break;

        case 3:
            foundStudent();
            break;

        case 4:
            delStudent();
            break;

        case 5:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
}