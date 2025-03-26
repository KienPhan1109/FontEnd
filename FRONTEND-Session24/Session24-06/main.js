let str;

while (true) {
    console.log("\n1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log(
        "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ"
    );
    console.log("7. Thoát chương trình");

    let choice = Number(prompt("Lựa chọn của bạn: "));

    if (isNaN(choice)) {
        console.log("Vui lòng nhập số!");
        continue;
    }

    switch (choice) {
        case 1:
            str = prompt("Nhập vào chuỗi: ");
            console.log("Nhập chuỗi thành công!");
            break;

        case 2:
            if (str.length <= 0) {
                console.log("Chuỗi chưa có!");
            } else {
                console.log(str);
            }
            break;

        case 3:
            if (str.length <= 0) {
                console.log("Chuỗi chưa có!");
            } else {
                console.log(`Độ dài của chuỗi là ${str.length}`);
            }
            break;

        case 4:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let search = prompt("Nhập ký tự cần tìm: ");
                let count = 0;

                for (let i = 0; i < str.length; i++) {
                    if (search === str[i]) {
                        count++;
                    }
                }

                if (count > 0) {
                    console.log(
                        `Số lần xuất hiện của ký tự '${search}' là: ${count}`
                    );
                } else {
                    console.log("Không tìm thấy ký tự!");
                }
            }
            break;

        case 5:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let strReverse = str.split("").reverse().join("");
                if (strReverse === str) {
                    console.log("Chuỗi trên là chuỗi đối xứng");
                } else {
                    console.log("Chuỗi trên không phải là chuỗi đối xứng");
                }
            }
            break;

        case 6:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let words = str.split(" ");
                for (let i = 0; i < words.length; i++) {
                    if (words[i].length > 0) {
                        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                    }
                }
                str = words.join(" ");
                console.log(`Chuỗi sau khi chuyển đổi: ${str}`);
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
