let years = parseInt(prompt("Nhập số năm kinh nghiệm của bạn:"));
years = Number(years);

if (isNaN(years) || years < 0) {
    alert("Vui lòng nhập số năm hợp lệ");
}
else {
    if (years < 1) {
        alert("Mới vào nghề");
    } else {
        if (years <= 3) {
            alert("Nhân viên có kinh nghiệm");
        } else {
            if (years <= 6) {
                alert("Chuyên viên");
            } else {
                alert("Quản lý");
            }
        }
    }
}
