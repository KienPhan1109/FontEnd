let str, char;
let arrayDuplicate = [];

while (true) {
    console.log("\n1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log(
        "3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện"
    );
    console.log("4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi");
    console.log("5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi");
    console.log("6. Chuyển đổi chuỗi ký tự thành dạng snake_case");
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
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let countChar = {};
                let arrayDuplicate = str.split("");

                for (let i = 0; i < arrayDuplicate.length; i++) {
                    char = arrayDuplicate[i];
                    if (countChar[char] === undefined) {
                        countChar[char] = 1;
                    } else {
                        countChar[char]++;
                    }
                }

                let temp = false;
                console.log("Các ký tự bị lặp trong chuỗi:");
                for (let char in countChar) {
                    if (countChar[char] > 1) {
                        console.log(`'${char}': ${countChar[char]} lần`);
                        temp = true;
                    }
                }

                if (!temp) {
                    console.log("Không có ký tự nào bị lặp trong chuỗi.");
                }
            }
            break;

        case 4:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let words = str.match(/\w+/g);
                let wordsSort = words.sort((x, y) => x - y);
                console.log(
                    `Từ dài nhất trong chuỗi là: ${
                        wordsSort[wordsSort.length - 1]
                    }`
                );
                console.log(`Từ ngắn nhất trong chuỗi là: ${wordsSort[0]}`);
            }
            break;

        case 5:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let countChar = {};
                let arrayDuplicate = str.split("");

                for (let i = 0; i < arrayDuplicate.length; i++) {
                    let char = arrayDuplicate[i];
                    if (countChar[char] === undefined) {
                        countChar[char] = 1;
                    } else {
                        countChar[char]++;
                    }
                }

                let maxCount = 0;
                let maxChar = "";
                for (let char in countChar) {
                    if (countChar[char] > maxCount) {
                        maxCount = countChar[char];
                        maxChar = char;
                    }
                }
                console.log(`Ký tự bị lặp nhiều nhất chuỗi: '${maxChar}': ${maxCount} lần`);
            }
            break;

        case 6:
            if (!str || str.length === 0) {
                console.log("Chuỗi chưa có!");
            } else {
                let snake_case = str.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/\s+/g, '_').toLowerCase();
                // snake_case là một kiểu đặt tên biến
                // Ví dụ:
                //   - "Hello World" sẽ được chuyển thành "hello_world"
                console.log(snake_case);
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
