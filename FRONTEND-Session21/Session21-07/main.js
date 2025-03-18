let price = parseFloat(prompt("Nhập vào số tiền gửi: "));
let interestRate = parseFloat(prompt("Nhập vào lãi suất (%): "));
let month = parseInt(prompt("Nhập vào số tháng gửi: "));

let temp = price;
let initialPrice = price;

while (month > 0) {
    temp += temp * (interestRate / 100);
    month--;
}

let interestEarned = temp - initialPrice;

alert(`Tiền lãi: ${interestEarned.toFixed(3)}`);
alert(`Tiền nhận được: ${temp.toFixed(3)}`);
