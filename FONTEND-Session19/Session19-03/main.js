let choice = parseInt(prompt("Nhập lựa chọn:" + "\n" + "1. VND -> USD" + "\n" + "2. USD -> VND"));
switch (choice) {
    case 1:
        {
            let vnd = parseFloat(prompt("Nhập số tiền VND: "));
            let usd = vnd / 23000;
            alert("Số tiền USD: " + usd);
            break;
        }
    case 2:
        {
            let usd = parseFloat(prompt("Nhập số tiền USD: "));
            let vnd = usd * 23000;
            alert("Số tiền VND: " + vnd);
            break;
        }
    default:
        alert("Lựa chọn không hợp lệ.")
        break;
}