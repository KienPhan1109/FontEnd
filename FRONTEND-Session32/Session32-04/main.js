const btn = document.getElementById("btn");
const name = document.getElementById("name");
const check = document.getElementById("check");

function checkEmail(email) {
    if (!email) {
        return `Email không được để trống!`;
    }
    if (!email.includes("@")) {
        return `Email phải chứa ký tự @!`;
    }
    if (!email.endsWith(".vn") && !email.endsWith(".com")) {
        return `Email phải kết thúc bằng .vn hoặc .com!`;
    }
    return `Email hợp lệ!`;
}

btn.addEventListener("click", function () {
    const message = checkEmail(name.value.trim());
    check.innerHTML = message;
    if (message === "Email hợp lệ!") {
        check.style.color = "green";
    } else {
        check.style.color = "red";
    }
});
