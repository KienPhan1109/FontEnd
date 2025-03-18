let num1 = Number(prompt("Nhập vào số thứ nhất: "));
let num2 = Number(prompt("Nhập vào số thứ hai: "));
let num3 = Number(prompt("Nhập vào số thứ ba: "));
let num4 = Number(prompt("Nhập vào số thứ tư: "));
let num5 = Number(prompt("Nhập vào số thứ năm: "));

let sum = 0;

if (num1 % 2 !== 0) sum += num1;
if (num2 % 2 !== 0) sum += num2;
if (num3 % 2 !== 0) sum += num3;
if (num4 % 2 !== 0) sum += num4;
if (num5 % 2 !== 0) sum += num5;

alert(`Tổng các số lẻ là: ${sum}`);