let tasks = [
    {
        id: 1,
        name: "Làm bài tập JS",
        description: "Hoàn thành bài tập về mảng và vòng lặp",
        startTime: "2025-03-31",
        status: "Chưa hoàn thành",
    },
    {
        id: 2,
        name: "Dọn dẹp phòng",
        description: "Sắp xếp lại bàn làm việc và giường ngủ",
        startTime: "2025-03-31",
        status: "Hoàn thành",
    },
];

function inputString(message) {
    let value;
    do {
        value = prompt(message).trim();
        if (!value) console.log("Giá trị nhập vào không được để trống!");
    } while (!value);
    return value;
}

function addTask(tasks) {
    let id = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    let name = inputString("Nhập tên công việc:");
    let description = inputString("Nhập mô tả công việc:");
    let startTime = inputString("Nhập thời gian bắt đầu (YYYY-MM-DD):");
    let status = "Chưa hoàn thành";

    tasks.push({ id, name, description, startTime, status });
    console.log("Thêm công việc thành công!");
}

function displayTasks(tasks) {
    console.log("\nDanh sách công việc:");
    tasks.forEach((task) => {
        console.log(`\n   ID: ${task.id}`);
        console.log(`   Tên: ${task.name}`);
        console.log(`   Mô tả: ${task.description}`);
        console.log(`   Thời gian bắt đầu: ${task.startTime}`);
        console.log(`   Trạng thái: ${task.status}`);
        console.log("--------------------------------");
    });
}

function updateTaskStatus(tasks) {
    let id = Number(prompt("Nhập ID công việc cần cập nhật trạng thái:"));
    let task = tasks.find((t) => t.id === id);

    if (!task) {
        console.log("Không tìm thấy công việc!");
        return;
    }

    let newStatus = prompt(
        "Nhập trạng thái mới (Hoàn thành / Chưa hoàn thành):"
    );
    if (newStatus === "Hoàn thành" || newStatus === "Chưa hoàn thành") {
        task.status = newStatus;
        console.log("Cập nhật trạng thái thành công!");
    } else {
        console.log("Trạng thái không hợp lệ!");
    }
}

function filterTasksByStatus(tasks) {
    let status = prompt(
        "Nhập trạng thái cần lọc (Hoàn thành / Chưa hoàn thành):"
    );
    let filteredTasks = tasks.filter((t) => t.status === status);
    displayTasks(filteredTasks);
}

function sortTasksByStatus(tasks) {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    console.log("Sắp xếp công việc thành công!");
    displayTasks(tasks);
}

function menuChoice() {
    while (true) {
        console.log("\n1. Thêm công việc mới.");
        console.log("2. Hiển thị tất cả công việc.");
        console.log("3. Cập nhật trạng thái công việc.");
        console.log("4. Lọc công việc theo trạng thái.");
        console.log("5. Sắp xếp công việc theo trạng thái.");
        console.log("6. Thoát.");

        let choice = Number(prompt("Nhập lựa chọn:"));

        if (choice === 6) {
            console.log("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                addTask(tasks);
                break;
            case 2:
                displayTasks(tasks);
                break;
            case 3:
                updateTaskStatus(tasks);
                break;
            case 4:
                filterTasksByStatus(tasks);
                break;
            case 5:
                sortTasksByStatus(tasks);
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    }
}

menuChoice();
