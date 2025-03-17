let num = prompt("Nhập vào một số"); // Bạn có thể đổi số khác

let hundred = Math.floor(num / 100);
let ten = Math.floor((num % 100) / 10);
let one = num % 10;

let result = "";

// Xử lý hàng trăm
if (hundred === 1) result += "Một trăm";
else if (hundred === 2) result += "Hai trăm";
else if (hundred === 3) result += "Ba trăm";
else if (hundred === 4) result += "Bốn trăm";
else if (hundred === 5) result += "Năm trăm";
else if (hundred === 6) result += "Sáu trăm";
else if (hundred === 7) result += "Bảy trăm";
else if (hundred === 8) result += "Tám trăm";
else if (hundred === 9) result += "Chín trăm";

if (hundred > 0 && ten === 0 && one > 0) {
    result += " linh";
}

// Xử lý hàng chục
if (ten === 1) result += (result ? " " : "") + "Mười";
else if (ten === 2) result += (result ? " " : "") + "Hai mươi";
else if (ten === 3) result += (result ? " " : "") + "Ba mươi";
else if (ten === 4) result += (result ? " " : "") + "Bốn mươi";
else if (ten === 5) result += (result ? " " : "") + "Năm mươi";
else if (ten === 6) result += (result ? " " : "") + "Sáu mươi";
else if (ten === 7) result += (result ? " " : "") + "Bảy mươi";
else if (ten === 8) result += (result ? " " : "") + "Tám mươi";
else if (ten === 9) result += (result ? " " : "") + "Chín mươi";

// Xử lý hàng đơn vị
if (one === 1 && ten > 1) result += " mốt";
else if (one === 1) result += (result ? " " : "") + "Một";  
else if (one === 2) result += (result ? " " : "") + "Hai";  
else if (one === 3) result += (result ? " " : "") + "Ba";  
else if (one === 4) result += (result ? " " : "") + "Bốn";  
else if (one === 5 && ten > 0) result += " lăm";
else if (one === 5) result += (result ? " " : "") + "Năm";  
else if (one === 6) result += (result ? " " : "") + "Sáu";  
else if (one === 7) result += (result ? " " : "") + "Bảy";  
else if (one === 8) result += (result ? " " : "") + "Tám";  
else if (one === 9) result += (result ? " " : "") + "Chín";  

result = result.charAt(0).toUpperCase() + result.slice(1);
console.log(result);
