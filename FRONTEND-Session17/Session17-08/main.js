let date1 = prompt("Nhập vào ngày thứ nhất: ");
let date2 = prompt("Nhập vào ngày thứ hai: ");

let d1 = new Date(date1);
let d2 = new Date(date2);

let number = Math.abs(d2 - d1);
let number1 = number / (1000 * 60 * 60 * 24);

console.log(`Độ lệch là ${number1} ngày`);
