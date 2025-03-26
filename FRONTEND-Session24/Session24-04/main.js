let a = [];
let row = 0;
let col = 0;
let posI = 0;
let posJ = 0;
let sum = 0;

while (true) {
    console.log("\n1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");

    let choice = Number(prompt("Lựa chọn của bạn: "));

    if (isNaN(choice)) {
        console.log("Vui lòng nhập số!");
        continue;
    }

    switch (choice) {
        case 1:
            let row = Number(prompt("Nhập vào số hàng: "));
            let col = Number(prompt("Nhập vào số cột: "));

            if (isNaN(row) || row <= 0 || isNaN(col) || col <= 0) {
                console.log("Dữ liệu nhập vào không hợp lệ!");
                break;
            }

            a = new Array(row);

            for (let i = 0; i < row; i++) {
                a[i] = new Array(col);
                for (let j = 0; j < col; j++) {
                    let value = Number(prompt(`Nhập phần tử [${i}][${j}]: `));
                    if (isNaN(value)) {
                        console.log("Phần tử không hợp lệ!");
                        j--;
                    } else {
                        a[i][j] = value;
                    }
                }
            }

            console.log("Nhập mảng thành công!");
            break;

        case 2:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
            } else {
                console.log("Mảng hiện tại:");
                for (let i = 0; i < a.length; i++) {
                    console.log(a[i].join(" "));
                }
            }
            break;

        case 3:
            sum = 0;
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a[i].length; j++) {
                    sum += a[i][j];
                }
            }
            console.log(`Tổng các phần tử trong mảng là: ${sum}`);
            break;

        case 4:
            let max = a[0][0];
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a[i].length; j++) {
                    if (a[i][j] >= max) {
                        max = a[i][j];
                        posI = i;
                        posJ = j;
                    }
                }
            }
            console.log(`Phần tử lớn nhất trong mảng là: ${max}`);
            console.log(`Vị trí là: [${posI}][${posJ}]`);

            break;

        case 5:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }

            let rowAverage = Number(
                prompt("Nhập vào hàng muốn tính trung bình cộng: ")
            );

            if (isNaN(rowAverage) || rowAverage < 0 || rowAverage >= a.length) {
                console.log(`Hàng ${rowAverage} không hợp lệ!`);
                break;
            }

            sum = 0;
            for (let j = 0; j < a[rowAverage].length; j++) {
                sum += a[rowAverage][j];
            }

            console.log(
                `Trung bình cộng của hàng ${rowAverage} là: ${
                    sum / a[rowAverage].length
                }`
            );
            break;

        case 6:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
            } else {
                for (let i = 0; i < a.length; i++) {
                    a[i].reverse();
                }
                console.log("Mảng sau khi đảo ngược:");
                for (let i = 0; i < a.length; i++) {
                    console.log(a[i].join(" "));
                }
            }
            break;

        case 7:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

    if (choice === 7) break;
}
