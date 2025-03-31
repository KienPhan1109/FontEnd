function inputArray() {
    return a = prompt("Nhập vào chuỗi bất kỳ");
}
function upperChar(str) {
    if (typeof str !== "string") {
        return "Dữ liệu không hợp lệ";
    }

    str = str.toLowerCase();
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");
}
console.log(upperChar(inputArray()));
