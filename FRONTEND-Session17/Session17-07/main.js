let number = prompt("Nhập số tiền:");

let formattedCurrency = Number(number).toLocaleString("vi-VN");

console.log(formattedCurrency + " VNĐ");
