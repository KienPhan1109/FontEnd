let a = [];
let average = 0;
let max = 0;
let maxPos = 0;
let b = new Array(0);
let sum = 0;

while (true) {
    console.log("\n1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
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
                if (a[i] > max) {
                    max = a[i];
                    posMax = i;
                }
            }
            console.log(`Phần tử lớn nhất trong mảng là: ${max}`);
            console.log(`Nằm ở vị trí: ${posMax}`);
            break;

        case 4:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                sum += a[i];
            }
            console.log(`Tổng của mảng là: ${sum}`);
            console.log(
                `Trung bình cộng các phần tử trong mảng là: ${sum / a.length}`
            );
            break;

        case 5:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            a.reverse();
            console.log(`Mảng sau khi đảo ngược là: ${a}`);
            break;

        case 6:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }

            let reversedA = [...a].reverse();

            if (JSON.stringify(a) === JSON.stringify(reversedA)) {
                console.log("Mảng trên là mảng đối xứng");
            } else {
                console.log("Mảng trên không phải là mảng đối xứng");
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
