let num1 = Number(prompt("Nhập vào số thứ nhất: "));
let num2 = Number(prompt("Nhập vào số thứ hai: "));
let num3 = Number(prompt("Nhập vào số thứ ba: "));
let num4 = Number(prompt("Nhập vào số thứ tư: "));
let num5 = Number(prompt("Nhập vào số thứ năm: "));

let countOdd = 0;
let countEven = 0;

(num1 % 2 == 0) ? countEven++ : countOdd++;
(num2 % 2 == 0) ? countEven++ : countOdd++;
(num3 % 2 == 0) ? countEven++ : countOdd++;
(num4 % 2 == 0) ? countEven++ : countOdd++;
(num5 % 2 == 0) ? countEven++ : countOdd++;

alert(`Có ${countEven} số chẵn và có ${countOdd} số lẻ`);