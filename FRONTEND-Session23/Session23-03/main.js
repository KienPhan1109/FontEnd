let n = Number(prompt("Nhập vào số phần tử trong mảng"));
let count = 0;

if (isNaN(n) || n <= 0) {
    console.log("Dữ liệu không hợp lệ");
}
else {
    let a = new Array(n);
    for (let i = 0; i < n; i++) {
        a[i] = Number(prompt(`Nhập vào phần tử thứ ${i + 1}`));
    }
    for (let i = 0; i < n; i++) {
        if (a[i] < 0) {
            count++;
        }
    }
}
console.log(`Phần tử có số nguyên âm là : ${count}`);

