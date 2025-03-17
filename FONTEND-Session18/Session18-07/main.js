let a = prompt("Mời bạn nhập vào số a");
a = Number(a);

let b = prompt("Mời bạn nhập vào số b");
b = Number(b);

let temp = 1;

let calc = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

let result;

switch (calc) {
    case "+":
        result = a + b;
        break

    case "-":
        result = a - b;
        break;

    case "*":
        result = a * b;
        break;

    case "/":
        result = a / b;
        break;

    default:
        alert("Không có phép tính này");
        temp = 0;
        break;
}
if (temp == 1) {
    alert (`Kết quả của phép tính trên: a ${calc} b = ${result}`);
}