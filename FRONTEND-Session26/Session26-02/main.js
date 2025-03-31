function filterArray(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let result = arr.filter(
        (word) => typeof word === "string" && word.length > 5
    );

    return result.length > 0 ? result : "Mảng không có phần tử nào";
}

console.log(filterArray(["apple", "banana", "cat", "elephant", "dog"]));
console.log(filterArray([]));
console.log(filterArray("abc"));
