let math = parseFloat(prompt("Nhập vào điểm Toán: "));
let physic = parseFloat(prompt("Nhập vào điểm Lý: "));
let chemistry = parseFloat(prompt("Nhập vào điểm Hóa: "));
let average = (math + physic + chemistry) / 3;

document.writeln("Điểm trung bình của 3 môn là: " + average );