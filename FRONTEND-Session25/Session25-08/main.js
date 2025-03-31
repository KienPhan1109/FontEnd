function inputArray() {
    return a = prompt("Nhập vào mật khẩu");
}
function isStrongPassword(a) {
    if (a.length < 8) {
        return "Mật khẩu ít nhất có 8 ký tự"
    }
    let checkArray = a.split("");
    let countUpper = 0;
    let countLower = 0;
    let countNum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 'A' && a[i] <= 'Z') {
            countUpper++;
        }
        if (a[i] >= 'a' && a[i] <= 'z') {
            countLower++;
        }
        if (a[i] >= '0' && a[i] <= '9') {
            countNum++;
        }
    }
    if (countUpper === 0) {
        return "Có ít nhất một chữ hoa";
    }
    if (countLower === 0) {
        return "Có ít nhất một chữ thường";
    }
    if (countNum === 0) {
        return "Có ít nhất một số";
    }
    return "Mật khẩu hợp lệ";
}
console.log(isStrongPassword(inputArray()));
