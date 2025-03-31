let users = [];

function inputEmail() {
    return prompt("Nhập vào email: ").trim();
}

function checkEmail(email) {
    if (!email.includes("@")) {
        return "Email phải chứa ký tự '@'.";
    }

    let lastDotIndex = email.lastIndexOf(".");
    if (lastDotIndex === -1 || lastDotIndex === email.length - 1) {
        return "Email phải có đuôi miền hợp lệ (ví dụ: .com, .vn).";
    }

    let domain = email.slice(lastDotIndex + 1);
    if (!/^[a-zA-Z]+$/.test(domain) || (domain !== "com" && domain !== "vn")) {
        return "Email phải có đuôi miền hợp lệ (ví dụ: .com, .vn).";
    }

    if (users.includes(email)) {
        return "Tài khoản đã tồn tại!";
    }

    users.push(email);
    return "Đăng ký thành công";
}

console.log(checkEmail(inputEmail()));
console.log(users);
