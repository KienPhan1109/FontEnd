function findMaxValue(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ!";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu!";
    }

    let max = Math.max(...arr);
    let position = arr.indexOf(max);

    return `Max = ${max}\nPosition: ${position}`;
}

console.log(findMaxValue([10, 9, 5, 11, 24, 5])); 
console.log(findMaxValue([])); 
console.log(findMaxValue("abc")); 
