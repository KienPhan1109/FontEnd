let n = prompt("Nhập vào một số từ 0 -> 9");
n = Number(n);
if (n < 0 || n > 9) {
    alert("Số nhập vào không hợp lệ");
}
else {
    switch (n){
        case 0:
            alert("Số Không");
            break;
        case 1:
            alert("Số Một");
            break;
        case 2:
            alert("Số Hai");
            break;
        case 3:
            alert("Số Ba");
            break;
        case 4:
            alert("Số Bốn");
        case 5:
            alert("Số Năm");
            break;
        case 6:
            alert("Số Sáu");
            break;
        case 7:
            alert("Số Bảy");
            break;
        case 8:
            alert("Số Tám");
        case 9:
            alert("Số Chín");
    }
}