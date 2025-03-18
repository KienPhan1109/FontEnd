let a = Number(prompt("Nhập vào a: "));
let b = Number(prompt("Nhập vào b: "));
let c = Number(prompt("Nhập vào c: "));

let max;

(a > b && a > c) ? max = a : (b > c) ? max = b : max = c;

alert(`Số lớn nhất trong 3 số là: ${max}`);