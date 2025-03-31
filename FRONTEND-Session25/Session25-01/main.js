function minValue(input) {
    if (!Array.isArray(input)) {
        return "Giá trị không hợp lệ";
    }
    if (input.length === 0) {
        return "Mảng không chứa phần tử";
    }
    let min = Math.min(...input);
    return `Phần tử nhỏ nhất trong mảng là ${min}`;
}

console.log(minValue([2, 4, 8, 1, 9]));
console.log(minValue([]));
console.log(minValue("abc"));
console.log(minValue([5, 2, 7, 5, 4]));
