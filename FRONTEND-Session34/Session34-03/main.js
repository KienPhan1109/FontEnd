let btn = document.getElementById("btn");
let users = JSON.parse(localStorage.getItem("users")) || [];

function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailText = document.getElementById("email-text");
    let passText = document.getElementById("password-text");

    emailText.textContent = "";
    passText.textContent = "";

    let foundUser = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
        emailText.textContent = "Email hoặc mật khẩu không đúng!";
    } else {
        alert("Đăng nhập thành công!");
        location.href = "../Session34-02/index.html";
    }
}

btn.addEventListener("click", login);
