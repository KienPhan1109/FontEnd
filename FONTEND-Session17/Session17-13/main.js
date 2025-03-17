let price = prompt("Nhập vào số tiền gửi: ");
let month = prompt("Nhập vào số tháng gửi: ");

let year = Math.floor(month / 12);

let result = Math.round((4.3 / 100) * year * price);

console.log(`Số tiền lãi là: ${result}`);
