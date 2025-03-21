let n = prompt("Nhập vào số phần tử trong mảng: ");
let a = [];
for (let i = 0; i < n; i++) {
    let num = prompt(`Nhập phần tử thứ ${i + 1}: `);
    if (!isNaN(num))
    {
        a.push(num);
    }
    else {
        alert("Dữ liệu không hợp lệ");
        i--;
    }
}
a.reverse();
console.log(a.join("   "));