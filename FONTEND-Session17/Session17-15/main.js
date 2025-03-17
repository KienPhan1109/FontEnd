let r = prompt("Nhập vào bán kính: ");
let pi = Math.PI

let theTich = Math.round((4 / 3) * pi * Math.pow(r, 3));
let dienTichBeMat = Math.round(4 * pi * Math.pow(r, 2));
let chuViLonNhat = Math.round(2 * pi * r);

console.log(`Thể tích là : ${theTich}`);
console.log(`Diện tích bề mặt là : ${dienTichBeMat}`);
console.log(`Chu vi lớn nhất là : ${chuViLonNhat}`);

