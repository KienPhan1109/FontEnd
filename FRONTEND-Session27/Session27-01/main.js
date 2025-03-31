function inputChoice() {
    return Number(prompt("Nhập vào lựa chọn:"));
}

function inputNumber(message) {
    let num;
    do {
        num = prompt(message);
        if (isNaN(num)) {
            console.log("Số không hợp lệ");
        } else {
            return Number(num);
        }
    } while (true);
}

function menu() {
    while (true) {
        console.log("\n1. Cộng hai số.");
        console.log("2. Trừ hai số.");
        console.log("3. Nhân hai số.");
        console.log("4. Chia hai số.");
        console.log("5. Thoát chương trình.");

        let choice = inputChoice();

        if (choice === 5) {
            console.log("\nThoát chương trình!");
            break;
        }

        let a = inputNumber("Nhập số thứ 1: ");
        let b = inputNumber("Nhập số thứ 2: ");

        switch (choice) {
            case 1:
                console.log(`\nTổng của hai số: ${a + b}`);
                break;
            case 2:
                console.log(`\nHiệu của hai số: ${a - b}`);
                break;
            case 3:
                console.log(`\nTích của hai số: ${a * b}`);
                break;
            case 4:
                if (b === 0) {
                    console.log("\nKhông thể chia cho 0!");
                } else {
                    console.log(`\nThương của hai số: ${a / b}`);
                }
                break;

            default:
                console.log("\nLựa chọn không hợp lệ!");
                break;
        }
    }
}

menu();
