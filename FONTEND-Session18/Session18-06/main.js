let year = prompt("Nhập vào năm: ");
year = Number(year);

if (isNaN(year) || year < 1) {
    alert("Năm không hợp lệ");
}
else {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        alert("Năm " + year + " là năm nhuận");
    }
    else {
        alert("Năm " + year + " không phải là năm nhuận");
    }
}
