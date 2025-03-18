let r = prompt("Nhập vào bán kính: ");
let h = prompt("Nhập vào chiều cao: ");
let pi = Math.PI

let dienTichXungQuanh = Math.round(2 * pi * r * h);
let dienTichToanPhan = Math.round(2 * pi * r * (r + h));
let theTich = Math.round(pi * r * r * h);
let chuViDay = Math.round(2 * pi * r);

console.log(`Diện tích xung quanh là : ${dienTichXungQuanh}`);
console.log(`Diện tích toàn phần là : ${dienTichToanPhan}`);
console.log(`Thể tích là : ${theTich}`);
console.log(`Chu vi đáy là : ${chuViDay}`);
