let a = parseFloat(prompt("Nhập cạnh a:"));
let b = parseFloat(prompt("Nhập cạnh b:"));
let c = parseFloat(prompt("Nhập cạnh c:"));

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Tam giác đều");
    } else if (a === b || a === c || b === c) {
        alert("Tam giác cân");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        alert("Tam giác vuông");
    } else {
        alert("Tam giác thường");
    }
} else {
    alert("Ba cạnh không tạo thành một tam giác hợp lệ");
}
