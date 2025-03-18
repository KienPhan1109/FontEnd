let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));

if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
    alert("Thời gian không hợp lệ!");
} else {
    let period;
    if (hour >= 12) {
        period = "PM";
        if (hour > 12) {
            hour = hour - 12;
        }
    } else {
        period = "AM";
        if (hour === 0) {
            hour = 12;
        }
    }

    let hourStr = hour < 10 ? "0" + hour : hour;
    let minuteStr = minute < 10 ? "0" + minute : minute;
    let secondStr = second < 10 ? "0" + second : second;

    alert("Thời gian: " + hourStr + ":" + minuteStr + ":" + secondStr + " " + period);
}
