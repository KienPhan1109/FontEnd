function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function filterIsPrime(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ!";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu!";
    }

    const newArray = arr
        .filter(value => isPrime(value) && value % 2 != 0);

    return newArray.length > 0 ? newArray : "Không có số nào thỏa mãn!";
}

console.log(filterIsPrime([10, 2, 3, 5, 7, 9]));
console.log(filterIsPrime([]));
console.log(filterIsPrime("abc"));
