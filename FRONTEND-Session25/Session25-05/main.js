function countInteger(a) {
    let integers = [];
    if (!Array.isArray(a)) {
        return "Giá trị không hợp lệ";
    }
    if (a.length === 0) {
        return "Mảng không chứa phần tử";
    }
    for (let i = 0; i < a.length; i++) {
        if (Number.isInteger(a[i]) && a[i] >= 0) {
            integers.push(a[i]);
        }
    }
    if (integers.length > 0) {
        return integers.length;
    }
    else {
        return "Không có số nguyên dương trong mảng";
    }
}

console.log(countInteger([4, 5.4, 6, -2]));
console.log(countInteger([1, 2, 5, 7, -8, 6]));
console.log(countInteger([1.2, -3, -6]));

