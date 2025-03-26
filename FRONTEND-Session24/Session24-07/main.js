let str;

while (true) {
    console.log("\n1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi");
    console.log("4. Đảo ngược chuỗi ký tự");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Tìm kiếm và thay thế các ký tự");
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
                let trimStr = str.trim();
                console.log(`Chuỗi sao khi xóa khoảng trắng ${trimStr}`);
            }
            break;

        case 4:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let strReverse = str.split("").reverse().join("");
                console.log(`Chuỗi sao khi đảo ngược ${strReverse}`);
            }
            break;

        case 5:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                console.log(`Số lượng ký tự trong chuỗi là ${str.length}`);
            }
            break;

        case 6:
            let found = false;
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                search = prompt("Nhập vào từ cần thay thế: ");
                arraySearch = str.split("");
                
                for (let i = 0; i < arraySearch.length; i++) {
                    if (search === arraySearch[i]) {
                        replace = prompt("Nhập từ thay thế");
                        arraySearch[i] = replace;
                        found = true;
                    }
                }
                str = arraySearch.join("");
                if (found == true) {
                    console.log("Thay thế thành công!");
                }
                else {
                    console.log("Không có từ bạn tìm trong chuỗi");
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
