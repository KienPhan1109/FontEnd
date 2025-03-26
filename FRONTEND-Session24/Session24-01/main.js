let a = [];
let sum = 0;
let maxValue, minValue;

while (true) {
    console.log("\n1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");

    let choice = Number(prompt("Lựa chọn của bạn: "));

    if (isNaN(choice)) {
        console.log("Vui lòng nhập số!");
        continue;
    }

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập vào số phần tử trong mảng: "));
            if (isNaN(n) || n <= 0) {
                console.log("Số phần tử phải là số nguyên dương!");
                break;
            }
            a = new Array(n);
            for (let i = 0; i < n; i++) {
                a[i] = Number(prompt(`Nhập vào phần tử thứ ${i + 1}:`));
            }
            console.log("Nhập mảng thành công!");
            break;

        case 2:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
            } else {
                console.log(`Mảng hiện tại: ${a}`);
            }
            break;

        case 3:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            maxValue = a[0];
            minValue = a[0];
            for (let i = 0; i < a.length; i++) {
                if (a[i] > maxValue) {
                    maxValue = a[i];
                }
                if (a[i] < minValue) {
                    minValue = a[i];
                }
            }
            console.log(`Giá trị lớn nhất trong mảng là: ${maxValue}`);
            console.log(`Giá trị nhỏ nhất trong mảng là: ${minValue}`);
            break;

        case 4:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                sum += a[i];
            }
            console.log(`Tổng các phần tử trong mảng là: ${sum}`);
            break;

        case 5:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            let searchValue = Number(prompt("Nhập vào số cần thống kê: "));
            let countValue = 0;

            if (isNaN(searchValue)) {
                console.log("Vui lòng nhập số!");
                continue;
            } else {
                for (let i = 0; i < a.length; i++) {
                    if (searchValue === a[i]) {
                        countValue++;
                    }
                }
                if (countValue > 0) {
                    console.log(
                        `${searchValue} xuất hiện ${countValue} lần trong mảng.`
                    );
                } else {
                    console.log(
                        `Số ${searchValue} không xuất hiện trong mảng.`
                    );
                }
            }
            break;

        case 6:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }

            a.sort((x, y) => x - y);
            console.log(`Mảng sau khi sắp xếp tăng dần: ${a}`);
            break;

        case 7:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

    if (choice === 7) break;
}
