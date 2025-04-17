function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function register() {
    const username = document.getElementById("registerName").value.trim();
    const password = document.getElementById("registerPass").value.trim();
    const errorName = document.getElementById("errorName");
    const errorPass = document.getElementById("errorPass");

    errorName.textContent = "";
    errorPass.textContent = "";

    if (!username) {
        errorName.textContent = "Vui lòng nhập tên đăng nhập.";
        return;
    }
    if (!password) {
        errorPass.textContent = "Vui lòng nhập mật khẩu.";
        return;
    }

    const users = getUsers();
    const exists = users.find((u) => u.username === username);

    if (exists) {
        errorName.textContent = "Tên đăng nhập đã tồn tại.";
        return;
    }

    users.push({ username, password });
    saveUsers(users);
    alert("Đăng ký thành công!");
    location.href = "login.html";
}

// ======================= ĐĂNG NHẬP =======================
function login() {
    const username = document.getElementById("logInName").value.trim();
    const password = document.getElementById("logInPass").value.trim();
    const remember = document.getElementById("checkDefault").checked;

    const errorName = document.getElementById("errorName");
    const errorPass = document.getElementById("errorPass");

    errorName.textContent = "";
    errorPass.textContent = "";

    if (!username) {
        errorName.textContent = "Vui lòng nhập tên đăng nhập.";
        return;
    }
    if (!password) {
        errorPass.textContent = "Vui lòng nhập mật khẩu.";
        return;
    }

    const users = getUsers();
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        if (remember) {
            localStorage.setItem("loggedInUser", username);
        } else {
            sessionStorage.setItem("loggedInUser", username);
        }
        alert("Đăng nhập thành công!");
        location.href = "index.html";
    } else {
        errorPass.textContent = "Tên đăng nhập hoặc mật khẩu không đúng.";
    }
}

function logOut() {
    localStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("loggedInUser");
    location.href = "login.html";
}

// ======================= HIỂN THỊ CHÀO MỪNG =======================
window.addEventListener("DOMContentLoaded", () => {
    const username =
        localStorage.getItem("loggedInUser") ||
        sessionStorage.getItem("loggedInUser");
    const title = document.querySelector(".title h1");

    if (title && title.textContent.includes("${}")) {
        if (username) {
            title.innerHTML = `Xin chào, <strong>${username}</strong> ! 👋`;
        } else {
            window.location.href = "login.html";
        }
    }
});

function redirectIfLoggedIn() {
    const username =
        localStorage.getItem("loggedInUser") ||
        sessionStorage.getItem("loggedInUser");
    if (username) {
        location.href = "index.html";
    }
}

if (
    location.pathname.includes("login.html") ||
    location.pathname.includes("register.html")
) {
    redirectIfLoggedIn();
}
