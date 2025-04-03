let courses = [
    {
        id: 1,
        name: "Lập trình cơ bản",
        instructor: "Hồ Xuân Hùng",
        students: [],
    },
    {
        id: 2,
        name: "Lập trình FRONTEND",
        instructor: "Trần Quốc Tuấn",
        students: [],
    },
    {
        id: 3,
        name: "Lập trình BACKEND",
        instructor: "Phan Trung Kiên",
        students: [],
    },
];

let users = [
    {
        id: 1,
        name: "Phan Trung Kiên",
        registeredCourses: [],
    },
    {
        id: 2,
        name: "Trần Võ Hữu Tài",
        registeredCourses: [],
    },
    {
        id: 3,
        name: "Đỗ Hoàng Sơn",
        registeredCourses: [],
    },
];

function choiceMainMenu() {
    let choice;
    do {
        choice = Number(prompt("Nhập lựa chọn của bạn: "));
        if (isNaN(choice) || choice <= 0) console.log("Dữ liệu không hợp lệ!");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

function inputChoice() {
    let choice;
    do {
        choice = prompt("Nhập lựa chọn của bạn: ");
        if (!choice) console.log("Dữ liệu không hợp lệ!");
    } while (!choice);
    return choice;
}

function addCourses(courses) {
    let n;
    do {
        n = Number(prompt("Nhập vào số lượng khóa học muốn thêm: "));
        if (isNaN(n) || n <= 0) console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(n) || n <= 0);

    while (n > 0) {
        let id =
            courses.length > 0 ? Math.max(...courses.map((c) => c.id)) + 1 : 1;

        let name;
        do {
            name = prompt("Nhập vào tên khóa học: ");
            if (!name) console.log("Dữ liệu không hợp lệ!");
        } while (!name);

        let instructor;
        do {
            instructor = prompt("Nhập vào giáo viên dạy: ");
            if (!instructor) console.log("Dữ liệu không hợp lệ!");
        } while (!instructor);

        courses.push({ id, name, instructor, students: [] });

        n--;
    }

    console.log("\n   Thêm khóa học thành công!");
}

function addUsers(users) {
    let n;
    do {
        n = Number(prompt("Nhập vào số lượng người dùng muốn thêm: "));
        if (isNaN(n) || n <= 0) console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(n) || n <= 0);

    while (n > 0) {
        let id = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

        let name;
        do {
            name = prompt("Nhập vào tên người dùng: ");
            if (!name) console.log("Dữ liệu không hợp lệ!");
        } while (!name);

        users.push({ id, name, registeredCourses: [] });

        n--;
    }

    console.log("\n   Thêm người dùng thành công!");
}

function displayCourses(courses) {
    if (courses.length === 0) return console.log("Danh sách khóa học trống!");

    courses.forEach((c) => {
        console.log(`\n       ID: ${c.id}`);
        console.log(`       Name: ${c.name}`);
        console.log(`       Instructor: ${c.instructor}`);
    });
}

function displayUsers(users) {
    if (users.length === 0) return console.log("Danh sách người dùng trống!");

    users.forEach((u) => {
        console.log(`\n       ID: ${u.id}`);
        console.log(`       Name: ${u.name}`);
    });
}

function searchCourses(courses) {
    console.log("\n   Danh sách khóa học");
    displayCourses(courses);

    let name;
    do {
        name = prompt("Nhập vào tên khóa học cần tìm: ");
        if (!name) console.log("\n   Dữ liệu không hợp lệ!");
    } while (!name);

    let searchCourses = courses.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
    );

    if (searchCourses.length === 0) {
        return console.log(`Không có khóa học tên ${name}`);
    }
    console.log(`\n   Đã tìm thấy khóa học tên ${name}`);
    displayCourses(searchCourses);
}

function registerCourses(courses, users) {
    console.log("\n   Danh sách người dùng");
    displayUsers(users);
    let idUser;
    do {
        idUser = Number(prompt("Nhập vào ID người dùng cần đăng ký: "));
        if (isNaN(idUser) || idUser <= 0)
            console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(idUser) || idUser <= 0);

    let user = users.find((u) => u.id === idUser);

    if (!user) {
        return console.log(`Không có người dùng có ID: ${idUser}`);
    }

    console.log("\n   Danh sách khóa học");
    displayCourses(courses);

    let idCourse;
    do {
        idCourse = Number(prompt("Nhập vào ID khóa học cần đăng ký: "));
        if (isNaN(idCourse) || idCourse <= 0)
            console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(idCourse) || idCourse <= 0);

    let course = courses.find((c) => c.id === idCourse);

    if (!course) {
        return console.log(`\n    Không có khóa học có ID: ${idCourse}`);
    }

    if (user.registeredCourses.includes(idCourse)) {
        console.log("\n   Người dùng đã đăng ký khóa học này!");
        return;
    }

    user.registeredCourses.push(idCourse);
    course.students.push(idUser);

    console.log("\n   Đăng ký khóa học thành công!");
}

function unregisterCourses(courses, users) {
    console.log("\n   Danh sách người dùng");
    displayUsers(users);
    let idUser;
    do {
        idUser = Number(prompt("Nhập vào ID người dùng cần hủy: "));
        if (isNaN(idUser) || idUser <= 0)
            console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(idUser) || idUser <= 0);

    let user = users.find((u) => u.id === idUser);

    if (!user) {
        return console.log(`Không có người dùng có ID: ${idUser}`);
    }

    console.log("\n   Danh sách khóa học");
    displayCourses(courses);

    let idCourse;
    do {
        idCourse = Number(prompt("Nhập vào ID khóa học cần hủy: "));
        if (isNaN(idCourse) || idCourse <= 0)
            console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(idCourse) || idCourse <= 0);

    let course = courses.find((c) => c.id === idCourse);

    if (!course) {
        return console.log(`\n    Không có khóa học có ID: ${idCourse}`);
    }

    if (!user.registeredCourses.includes(idCourse)) {
        console.log("\n   Người dùng chưa đăng ký khóa học này!");
        return;
    }

    user.registeredCourses = user.registeredCourses.filter(
        (id) => id !== idCourse
    );
    course.students = course.students.filter((id) => id !== idUser);

    console.log("\n   Hủy khóa học thành công!");
}

function deleteCourse(courses, users) {
    console.log("\n   Danh sách khóa học");
    displayCourses(courses);

    let id;
    do {
        id = Number(prompt("Nhập vào id khóa học cần xóa: "));
        if (isNaN(id) || id <= 0) console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let index = courses.findIndex((c) => c.id === id);

    if (index === -1)
        return console.log(`\n   Không tìm thấy khóa học có ID: ${id}`);

    let cm = confirm("Bạn có chắc chắn muốn xóa khóa học này!!");
    if (cm) {
        courses.splice(index, 1);
        users.forEach((user) => {
            user.registeredCourses = user.registeredCourses.filter(
                (courseId) => courseId !== id
            );
        });
        console.log("\n   Xóa khóa học thành công!");
    } else return console.log("\n   Hủy xóa khóa học!");
}

function displayUserCourses(users, courses) {
    console.log("\n   Danh sách người dùng");
    displayUsers(users);

    let idUser;
    do {
        idUser = Number(prompt("Nhập vào ID người dùng: "));
        if (isNaN(idUser) || idUser <= 0)
            console.log("\n   Dữ liệu không hợp lệ!");
    } while (isNaN(idUser) || idUser <= 0);

    let user = users.find((u) => u.id === idUser);

    if (!user) {
        return console.log(`Không có người dùng có ID: ${idUser}`);
    }

    if (user.registeredCourses.length === 0) {
        return console.log("\n   Người dùng chưa đăng ký khóa học nào!");
    }

    console.log(`\n   Danh sách khóa học của ${user.name}:`);
    user.registeredCourses.forEach((courseId) => {
        let course = courses.find((c) => c.id === courseId);
        console.log(`\n       Name: ${course.name}`);
        console.log(`       Instructor: ${course.instructor}`);
    });
}

function menuCourse() {
    while (true) {
        console.log("\n   a. Thêm khóa học.");
        console.log("   b. Tìm kiếm khóa học.");
        console.log("   c. Xóa khóa học.");
        console.log("   d. Quay lại menu chính.");

        let choice = inputChoice();

        switch (choice) {
            case "a":
                addCourses(courses);
                break;

            case "b":
                searchCourses(courses);
                break;

            case "c":
                deleteCourse(courses, users);
                break;

            case "d":
                return;

            default:
                console.log("\n   Lựa chọn không hợp lệ!");
                break;
        }
    }
}

function menuUser() {
    while (true) {
        console.log("\n   a. Thêm người dùng.");
        console.log("   b. Đăng ký khóa học.");
        console.log("   c. Hủy đăng ký khóa học.");
        console.log("   d. Hiển thị danh sách khóa học của người dùng.");
        console.log("   e. Quay lại menu chính.");

        let choice = inputChoice();

        switch (choice) {
            case "a":
                addUsers(users);
                break;

            case "b":
                registerCourses(courses, users);
                break;

            case "c":
                unregisterCourses(courses, users);
                break;

            case "d":
                displayUserCourses(users, courses);
                break;

            case "e":
                return;

            default:
                console.log("\n   Lựa chọn không hợp lệ!");
                break;
        }
    }
}

function mainMenu() {
    while (true) {
        console.log("\n1. Quản lý khóa học.");
        console.log("2. Quản lý người dùng.");
        console.log("3. Thoát.");

        let choice = choiceMainMenu();

        switch (choice) {
            case 1:
                menuCourse();
                break;

            case 2:
                menuUser();
                break;

            case 3:
                console.log("\nThoát chương trình!");
                return;

            default:
                console.log("\nLựa chọn không hợp lệ!");
                break;
        }
    }
}

mainMenu();
