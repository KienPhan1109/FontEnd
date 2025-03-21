let a = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 12, 2];
let searchValue = Number(prompt("Nhập số cần tìm: "));
let countValue = 0;

for (let i = 0; i < a.length; i++) {
    if (searchValue == a[i])
    {
        countValue++;
    }
}
console.log(`Số ${searchValue} xuất hiện ${countValue} lần trong mảng`);
