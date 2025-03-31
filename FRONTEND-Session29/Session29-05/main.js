let users = [];

function registerUser(users) {
    let name = prompt("Nhập tên người dùng:").trim();
    let email = prompt("Nhập email:").trim();

    if (!email.includes("@")) {
        console.log("Email phải chứa ký tự @!");
        return;
    }

    if (!(email.endsWith(".com") || email.endsWith(".vn"))) {
        console.log("Email phải kết thúc bằng .com hoặc .vn!");
        return;
    }

    if (users.some((user) => user.email === email)) {
        console.log("Email đã tồn tại!");
        return;
    }

    let password = prompt("Nhập mật khẩu:");

    if (password.length < 6) {
        console.log("Mật khẩu phải trên 6 ký tự!");
        return;
    }

    let hasUpperCase = false;
    for (let char of password) {
        if (char >= "A" && char <= "Z") {
            hasUpperCase = true;
            break;
        }
    }
    if (!hasUpperCase) {
        console.log("Mật khẩu phải chứa ít nhất một chữ hoa!");
        return;
    }

    let specialChars = "!@#$%^&*";
    let hasSpecialChar = false;
    for (let char of password) {
        if (specialChars.includes(char)) {
            hasSpecialChar = true;
            break;
        }
    }
    if (!hasSpecialChar) {
        console.log("Mật khẩu phải chứa ít nhất một ký tự đặc biệt!");
        return;
    }

    users.push({ name, email, password });
    console.log("\nĐăng ký thành công!");
}

function loginUser(users) {
    let email = prompt("Nhập email đăng nhập:").trim();
    let password = prompt("Nhập mật khẩu:").trim();

    let user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user) {
        console.log("\nĐăng nhập thành công!");
        console.log(`Xin chào, ${user.name}`);
    } else {
        console.log("Email hoặc mật khẩu không đúng!");
    }
}

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn:").trim());
        if (isNaN(choice) || choice <= 0) console.log("Giá trị không hợp lệ");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

function menuChoice() {
    while (true) {
        console.log("\n1. Đăng ký người dùng.");
        console.log("2. Đăng nhập người dùng.");
        console.log("3. Thoát.");

        let choice = inputChoice();

        if (choice === 3) {
            console.log("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                registerUser(users);
                break;

            case 2:
                loginUser(users);
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
