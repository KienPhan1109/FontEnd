let a = [];
let exit = false;

while (true) {
    console.log("\nMENU");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");

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
                break;
            }
            console.log(`Mảng hiện tại ${a}`);
            break;

        case 3:
            let newValue = Number(prompt("Nhập giá trị cần thêm:"));
            if (!isNaN(newValue)) {
                a.push(newValue);
                console.log("Thêm thành công!");
            } else {
                console.log("Giá trị không hợp lệ!");
            }
            break;

        case 4:
            let indexEdit = Number(prompt("Nhập vị trí cần sửa:"));
            if (indexEdit >= 0 && indexEdit < a.length) {
                let newValue = Number(prompt("Nhập giá trị mới:"));
                if (!isNaN(newValue)) {
                    a[indexEdit] = newValue;
                    console.log("Sửa thành công!");
                } else {
                    console.log("Giá trị không hợp lệ!");
                }
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 5:
            let indexDelete = Number(prompt("Nhập vị trí cần xóa:"));
            if (indexDelete >= 0 && indexDelete < a.length) {
                a.splice(indexDelete, 1);
                console.log("Xóa thành công!");
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 6:
            console.log("Thoát chương trình!");
            exit = true;
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }
    if (exit) {
        break;
    }
}
