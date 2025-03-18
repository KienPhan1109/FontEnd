let number = prompt("Nhập vào số nguyên: ");
number = Number(number);
if (number <= 0) {
    console.log("Số nguyên không được nhỏ hơn hoặc bằng 0");
}
else if (number % 2 == 0) {
    console.log(`${number} là số chẵn`);
}
else {
    console.log(`${number} là số lẻ`);
}