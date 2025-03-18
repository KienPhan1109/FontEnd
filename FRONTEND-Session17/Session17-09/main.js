let a = prompt("Nhập vào a: ");
let b = prompt("Nhập vào b: ");
let c = prompt("Nhập vào c: ");

let denta = Math.pow(b, 2) - 4 * a * c;

let x1 = (-b + Math.sqrt(denta)) / (2 * a);
let x2 = (-b - Math.sqrt(denta)) / (2 * a);

console.log(`Phương trình có hai nghiệm x1: ${x1} và x2: ${x2}`);
