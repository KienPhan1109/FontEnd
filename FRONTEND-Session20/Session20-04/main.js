let str = String(prompt("Nhập vào chuỗi bất kỳ: "));

let search = String(prompt("Nhập vào chuỗi cần tìm kiếm: "));

let found = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === search) {
        found = 1;
        break;
    }
}

(found) ? alert("Tồn tại từ cần tìm kiếm") :
alert("Không tồn tại từ cần tìm kiếm");