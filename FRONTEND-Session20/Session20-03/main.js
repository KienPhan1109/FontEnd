let number = prompt("Nhập vào một số:");

if (!Number(number)) {
    alert("Số không hợp lệ")
} 
else {
    let numberReverse = number.split('').reverse().join('');
    if (number === numberReverse) {
        alert("Là số đối xứng");
    }
    else {
        alert("Không phải số đối xứng");
    }
}
