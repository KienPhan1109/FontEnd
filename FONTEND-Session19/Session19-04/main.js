let n = parseInt(prompt("Nhập vào một số:"));

if (n % 3 == 0 && n % 5 == 0) {
    alert(`${n} chia hết cho cả 3 và 5`);
}
else {
    alert(`${n} không chia hết cho cả 3 và 5`);
}