let toan = parseFloat(prompt("Nhập vào môn Toán"));
let van = parseFloat(prompt("Nhập vào môn Văn"));
let anh = parseFloat(prompt("Nhập vào môn Anh"));

let tb = (toan + van + anh) / 3;

if (tb >= 8) {
    console.log("Giỏi");
}
else if (tb >= 6.5 && tb <=7.9) {
    console.log("Khá");
}
else if (tb >= 5 && tb <= 6.4) {
    console.log("Trung Bình");
}
else {
    console.log("Yếu");
}
    