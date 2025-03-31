function filterPow(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ!";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu!";
    }

    const newArray = arr
        .map(value => Math.pow(value, 2))
        .filter(sqrtValue => sqrtValue % 2 === 0);

    return newArray.length > 0 ? newArray : "Không có số nào thỏa mãn!";
}

console.log(filterPow([2, 5, 10]));
console.log(filterPow([]));
console.log(filterPow("abc"));
