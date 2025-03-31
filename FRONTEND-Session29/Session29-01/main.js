let contacts = [
    {
        id: 1,
        name: "Phan Trung Kiên",
        email: "phantrungkien2006@gmail.com",
        phone: "0814780306",
    },
];

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn: "));
        if (isNaN(choice) || choice <= 0)
            console.log("Số nhập vào không hợp lệ!");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

// Hàm hiển thị danh sách danh bạ
function displayContacts(contacts) {
    console.log("\nDanh sách danh bạ");
    return contacts.forEach((value) => {
        console.log(`\n   ID: ${value.id}`);
        console.log(`   Name: ${value.name}`);
        console.log(`   Email: ${value.email}`);
        console.log(`   Phone: ${value.phone}`);
    });
}

// Hàm thêm danh bạ
function inputContact(contacts) {
    let n;
    do {
        n = Number(prompt("Nhập vào số lượng danh bạ muốn thêm:"));
        if (isNaN(n) || n <= 0) console.log("Số lượng nhập vào không hợp lệ");
    } while (isNaN(n) || n <= 0);

    while (n > 0) {
        let id =
            contacts.length > 0
                ? Math.max(...contacts.map((c) => c.id)) + 1
                : 1;

        let name;
        do {
            name = prompt("Nhập vào tên danh bạ:");
            if (!name) console.log("Tên danh bạ không được để trống!");
        } while (!name);

        let email;
        do {
            email = prompt("Nhập vào email danh bạ:");
            if (!email) console.log("Email danh bạ không được để trống!");
        } while (!email);

        let phone;
        do {
            phone = prompt("Nhập vào số điện thoại:");
            if (!phone) console.log("Số điện thoại không được để trống!");
        } while (!phone);

        contacts.push({ id, name, email, phone });

        n--;
    }
    console.log("Thêm danh bạ thành công!");
}

// Hàm tìm kiếm danh bạ
function searchContacts(contacts) {
    let search;
    do {
        search = prompt("Nhập vào số điện thoại:");
        if (!search) console.log("Số điện thoại không được để trống!");
    } while (!search);

    let searchArray = contacts.filter((item) => item.phone.includes(search));

    if (searchArray.length > 0) {
        console.log("Kết quả tìm kiếm:");
        displayContacts(searchArray);
    } else {
        console.log("Không tìm thấy danh bạ nào có số điện thoại này.");
    }
}

// Hàm cập nhật danh bạ
function updateContact(contacts) {
    let id;
    do {
        id = Number(prompt("Nhập vào id:"));
        if (isNaN(id) || id <= 0) console.log("Id nhập vào không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let contact = contacts.find((c) => c.id === id);
    if (!contact) {
        console.log("Không tìm thấy danh bạ với ID này!");
        return;
    }

    console.log("Thông tin hiện tại:");
    displayContacts([contact]);

    let name;
    do {
        name = prompt("Nhập vào tên danh bạ:");
        if (!name) console.log("Tên danh bạ không được để trống!");
    } while (!name);

    let email;
    do {
        email = prompt("Nhập vào email danh bạ:");
        if (!email) console.log("Email danh bạ không được để trống!");
    } while (!email);

    let phone;
    do {
        phone = prompt("Nhập vào số điện thoại:");
        if (!phone) console.log("Số điện thoại không được để trống!");
    } while (!phone);

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    console.log("Cập nhật danh bạ thành công!");
}

// Hàm xóa danh bạ
function deleteContact(contacts) {
    let id;
    do {
        id = Number(prompt("Nhập ID của danh bạ cần xóa:"));
        if (isNaN(id) || id <= 0) console.log("ID không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let index = contacts.findIndex((c) => c.id === id);
    if (index === -1) {
        console.log("Không tìm thấy danh bạ với ID này!");
        return;
    }

    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
        contacts.splice(index, 1);
        console.log("Xóa danh bạ thành công!");
    } else {
        console.log("Hủy xóa danh bạ.");
    }
}

function menuChoice() {
    while (true) {
        console.log("\n1. Thêm đối tượng Contact.");
        console.log("2. Hiển thị danh bạ.");
        console.log("3. Tìm kiếm thông tin.");
        console.log("4. Cập nhật thông tin.");
        console.log("5. Xóa đối tượng Contact.");
        console.log("6. Thoát.");
        let choice = inputChoice();

        if (choice === 6) {
            console.log("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                inputContact(contacts);
                break;

            case 2:
                displayContacts(contacts);
                break;

            case 3:
                searchContacts(contacts);
                break;

            case 4:
                updateContact(contacts);
                break;

            case 5:
                deleteContact(contacts);
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
