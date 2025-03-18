let number1=parseInt(prompt("nhập số thứ nhất:"))
let number2=parseInt(prompt("nhập số thứ hai:"))
let randomNumber = Math.floor(Math.random() * (number2 - number1)) + number1;
document.writeln("Số ngẫu nhiên trong khoảng từ "+number1+" đến "+number2+" là: "+randomNumber)