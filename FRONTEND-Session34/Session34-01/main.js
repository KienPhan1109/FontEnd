let btn = document.getElementById('btn');
let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmInput = document.getElementById('confirm');

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let conf = confirmInput.value.trim();

    let valid = true;

    document.getElementById('email-text').textContent = "";
    document.getElementById('password-text').textContent = "";
    document.getElementById('confirm-text').textContent = "";

    if (email === "") {
        document.getElementById('email-text').textContent = "Email không được để trống!";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById('email-text').textContent = "Email phải chứa ký tự @";
        valid = false;
    } else if (!(email.endsWith(".vn") || email.endsWith(".com"))) {
        document.getElementById('email-text').textContent = "Email phải kết thúc bằng .vn hoặc .com!";
        valid = false;
    } else if (users.some(u => u.email === email)) {
        document.getElementById('email-text').textContent = "Email đã tồn tại!";
        valid = false;
    }

    if (password === "") {
        document.getElementById('password-text').textContent = "Mật khẩu không được để trống!";
        valid = false;
    }

    if (conf === "") {
        document.getElementById('confirm-text').textContent = "Xác nhận mật khẩu không được để trống!";
        valid = false;
    } else if (password !== conf) {
        document.getElementById('confirm-text').textContent = "Mật khẩu xác nhận không khớp!";
        valid = false;
    }

    if (valid) {
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        emailInput.value = "";
        passwordInput.value = "";
        confirmInput.value = "";

        alert("Đăng ký thành công!");
    }
}

btn.addEventListener('click', register);
