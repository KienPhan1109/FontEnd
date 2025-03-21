let input = prompt("Nhập vào một dãy số");
let array = input.split(" ").map(Number);

if (array.some(isNaN)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    let max = Math.max(...array);
    console.log(`${max} là số lớn nhất trong dãy số`);
}
