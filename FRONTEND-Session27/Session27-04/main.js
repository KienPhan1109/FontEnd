let a = [];

function inputChoice() {
    return Number(prompt("Nhập vào lựa chọn: "));
}

function inputInteger() {
    let n;
    do {
        n = Number(prompt("Nhập vào số lượng phần tử: "));
        if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
            console.log("Vui lòng nhập một số nguyên dương!");
        }
    } while (isNaN(n) || n <= 0 || !Number.isInteger(n));

    a = [];
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
    console.log("Nhập số thành công!");
}

function averageInteger() {
    if (a.length === 0) {
        console.log("Chưa có mảng số nguyên!");
        return;
    }

    let sum = a.reduce((total, value) => total + value, 0);
    let average = sum / a.length;
    console.log(`Trung bình cộng của các số là: ${average.toFixed(2)}`);
}

function maxNumEven() {
    if (a.length === 0) {
        console.log("Chưa có mảng số nguyên!");
        return;
    }

    let evenNumbers = a.filter((value) => value % 2 === 0);
    if (evenNumbers.length === 0) {
        console.log("Không có số chẵn nào trong mảng!");
        return;
    }

    let max = Math.max(...evenNumbers);
    console.log(`Số chẵn lớn nhất là: ${max}`);
}

function minNumOdd() {
    if (a.length === 0) {
        console.log("Chưa có mảng số nguyên!");
        return;
    }

    let oddNumbers = a.filter((value) => value % 2 !== 0);
    if (oddNumbers.length === 0) {
        console.log("Không có số lẻ nào trong mảng!");
        return;
    }

    let min = Math.min(...oddNumbers);
    console.log(`Số lẻ nhỏ nhất là: ${min}`);
}

while (true) {
    console.log("\n1. Nhập danh sách số nguyên.");
    console.log("2. Tính trung bình cộng của các số.");
    console.log("3. Tìm số chẵn lớn nhất.");
    console.log("4. Tìm số lẻ nhỏ nhất.");
    console.log("5. Thoát.");
    let choice = inputChoice();

    if (choice === 5) {
        console.log("Thoát chương trình!");
        break;
    }

    switch (choice) {
        case 1:
            inputInteger();
            break;
        case 2:
            averageInteger();
            break;
        case 3:
            maxNumEven();
            break;
        case 4:
            minNumOdd();
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
}