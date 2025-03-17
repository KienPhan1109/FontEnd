let username = prompt("Nhập tên người dùng:");

if (username === null) {
    alert("Cancelled");
} else if (username === "ADMIN") {
    let password = prompt("Nhập mật khẩu:");
    
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I Don’t know you");
}