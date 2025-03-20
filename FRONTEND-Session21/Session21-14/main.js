let width = prompt("Nhập vào chiều rộng: ");
let length = prompt("Nhập vào chiều cao: ");

for (let i = 0; i < width; i++) {
    for (let j = 0; j < length; j++) {
        if (i >= 1 && j >= 1 && i <= width - 2 && j <= length - 2) {
            document.writeln("&nbsp;&nbsp;");
        }
        else
        {
            document.writeln("* ");
        }
    }
    document.writeln("<br>");
}