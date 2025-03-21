let n = Number(prompt("Nhập vào số phần tử trong mảng"));
let count = 0;
let b = [];

if (isNaN(n) || n <= 0) {
    console.log("Dữ liệu không hợp lệ");
}
else {
    let a = new Array(n);
    for (let i = 0; i < n; i++) {
        a[i] = Number(prompt(`Nhập vào phần tử thứ ${i + 1}`));
    }
    for (let i = 0; i < n; i++) {
        if (!isNaN(a[i])) {
            b.push(a[i]);
        }
    }
}
if (b.length > 0) {
    console.log(`Ký tự số trong mảng: ${b}`);
}
else {
    console.log("Không có ký tự số");
    
}

