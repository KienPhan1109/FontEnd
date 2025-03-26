let str;

while (true) {
    console.log("\n1. Nhập chuỗi ký tự.");
    console.log("2. Hiển thị chuỗi ký tự.");
    console.log("3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào.");
    console.log("4. Chuyển đổi các ký tự trong chuỗi.");
    console.log("5. Trộn lẫn các ký tự của chuỗi.");
    console.log("6. Tách chuỗi thành các từ.");
    console.log("7. Thoát chương trình");
    let choice = Number(prompt("Nhập vào lựa chọn của bạn: "));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi ký tự: ");
            break;

        case 2:
            if (!str || str.length === 0) {
                console.log("Chưa nhập chuỗi ký tự!");
            } else {
                console.log(`Chuỗi vừa nhập: ${str}`);
            }
            break;

        case 3:
            if (!str || str.length === 0) {
                console.log("Chưa nhập chuỗi ký tự!");
            } else {
                let countStr = str.split("");
                let countNum = 0;
                let countChar = 0;
                for (let i = 0; i < countStr.length; i++) {
                    if (
                        (countStr[i] >= "a" && countStr[i] <= "z") ||
                        (countStr[i] >= "A" && countStr[i] <= "Z")
                    ) {
                        countChar++;
                    } else if (countStr[i] >= "0" && countStr[i] <= "9") {
                        countNum++;
                    }
                }
                console.log(`Tổng số lượng ký tự trong chuỗi là: ${countChar}`);
                console.log(`Tổng số lượng số trong chuỗi là: ${countNum}`);
            }
            break;

        case 4:
            if (!str || str.length === 0) {
                console.log("Chưa nhập chuỗi ký tự!");
            } else {
                let replaceStr = str.split("");
                for (let i = 0; i < replaceStr.length; i++) {
                    if (replaceStr[i] >= "a" && replaceStr[i] <= "z") {
                        replaceStr[i] = replaceStr[i].toUpperCase();
                    } else if (replaceStr[i] >= "A" && replaceStr[i] <= "Z") {
                        replaceStr[i] = replaceStr[i].toLowerCase();
                    }
                }
                console.log(
                    `Chuỗi sau khi chuyển đổi là ${replaceStr.join("")}`
                );
            }
            break;

        case 5:
            if (!str || str.length === 0) {
                console.log("Chưa nhập chuỗi ký tự!");
            } else {
                let str2 = prompt("Nhập vào chuỗi muốn trộn: ");
                let result = "";
                let maxLength = Math.max(str.length, str2.length);
                
                for (let i = 0; i < maxLength; i++) {
                    if (i < str.length) result += str[i];
                    if (i < str2.length) result += str2[i];
                }
                console.log(`Chuỗi sau khi trộn lẫn: ${result}`);
            }
            break;

        case 6:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let words = str.match(/\w+/g); // Tách thành các từ
                let wordsSort = words.sort((x, y) => x - y); // Sắp xếp
                console.log(wordsSort);
            }
            break;

        case 7:
            console.log("Thoát chương trình!!!");
            break;

        default:
            break;
    }
    if (choice === 7) break;
}
