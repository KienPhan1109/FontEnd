let month = Number(prompt("Nhập vào một tháng trong năm (1-12): "));

(month < 1 || month > 12) ? alert("Tháng không hợp lệ") :
(month >= 1 && month <= 3) ? alert("Mùa Xuân") : 
(month >= 4 && month <= 6) ? alert("Mùa Hạ") : 
(month >= 7 && month <= 9) ? alert("Mùa Thu") : 
alert ("Mùa Đông");