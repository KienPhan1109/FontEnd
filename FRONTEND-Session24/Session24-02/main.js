let a = [];
let average = 0;
let arrayOdd = [];
let arrayEven = [];
let sum = 0;

while (true) {
    console.log("\n1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
                if (isNaN(a[i]) || a[i] < 0) {
                    console.log("Phần tử không hợp lệ!");
                    i--;
                }
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
            for (let i = 0; i < a.length; i++) {
                if (a[i] % 2 === 0) arrayOdd.push(a[i]);
                else arrayEven.push(a[i]);
            }
            console.log(`Các phần tử chẵn trong mảng là: ${arrayOdd}`);
            console.log(`Các phần tử lẻ trong mảng là: ${arrayEven}`);
            break;

        case 4:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                sum += a[i];
            }
            console.log(
                `Trung bình cộng các phần tử trong mảng là: ${sum / a.length}`
            );
            break;

        case 5:
            let found = true;
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            let delPos = Number(prompt("Nhập vào vị trí cần xóa: "));
            if (isNaN(delPos)) {
                console.log("Dữ liệu không hợp lệ!");
                continue;
            }
            for (let i = 0; i < a.length; i++) {
                if (delPos === i) {
                    delPos = i;
                    found = true;
                    break;
                } else {
                    found = false;
                }
            }
            if (found) {
                a.splice(delPos, 1);
                console.log(`Mảng sau khi xóa: ${a}`);
            } else {
                console.log("Giá trị cần xóa không tồn tại trong mảng!");
            }
            break;

        case 6:
            let maxValue = 0;

            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }

            a.sort((x, y) => x - y);
            for (let i = 0; i < a.length - 1; i++) {
                if (a[i] >= maxValue) {
                    maxValue = a[i];
                }
            }

            console.log(`Giá trị lớn thứ hai là: ${maxValue}`);
            break;

        case 7:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

    if (choice === 7) break;
}
