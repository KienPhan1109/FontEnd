function splitArray(arr, n) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Mảng đầu vào không hợp lệ!");
        return [];
    }
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        console.log("Kích thước mảng con không hợp lệ!");
        return [];
    }

    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

let n;
do {
    n = Number(prompt("Nhập vào số lượng phần tử: "));
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        console.log("Vui lòng nhập một số nguyên dương!");
    }
} while (isNaN(n) || n <= 0 || !Number.isInteger(n));

let a = [];
for (let i = 0; i < n; i++) {
    let num;
    do {
        num = Number(prompt(`Nhập vào số nguyên thứ ${i + 1}: `));
        if (isNaN(num) || !Number.isInteger(num)) {
            console.log("Số nhập vào phải là số nguyên!");
        }
    } while (isNaN(num) || !Number.isInteger(num));
    a.push(num);
}

let subArraySize;
do {
    subArraySize = Number(prompt("Nhập vào kích thước mảng con: "));
    if (isNaN(subArraySize) || subArraySize <= 0 || !Number.isInteger(subArraySize)) {
        console.log("Vui lòng nhập một số nguyên dương!");
    }
} while (isNaN(subArraySize) || subArraySize <= 0 || !Number.isInteger(subArraySize));

let newArr = splitArray(a, subArraySize);
console.log("Mảng sau khi chia:", newArr);
