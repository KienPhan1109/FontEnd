function inputChoice() {
    return Number(prompt("Nhập vào lựa chọn: "));
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

while (true) {
    console.log("\n1. Tính diện tích hình tròn.");
    console.log("\n2. Tính chu vi hình tròn.");
    console.log("\n3. Tính diện tích hình chữ nhật.");
    console.log("\n4. Tính chu vi hình chữ nhật.");
    console.log("\n5. Thoát.");
    let choice = inputChoice();

    if (choice === 5) break;

    switch (choice) {
        case 1:
            let r = Number(prompt("Nhập bán kính hình tròn: "));
            console.log(`Diện tích hình tròn: ${circleArea(r).toFixed(2)}`);
            break;

        case 2:
            r = Number(prompt("Nhập bán kính hình tròn: "));
            console.log(`Chu vi hình tròn: ${circlePerimeter(r).toFixed(2)}`);
            break;

        case 3:
            let length = Number(prompt("Nhập chiều dài hình chữ nhật: "));
            let width = Number(prompt("Nhập chiều rộng hình chữ nhật: "));
            console.log(
                `Diện tích hình chữ nhật: ${rectangleArea(
                    length,
                    width
                ).toFixed(2)}`
            );
            break;

        case 4:
            length = Number(prompt("Nhập chiều dài hình chữ nhật: "));
            width = Number(prompt("Nhập chiều rộng hình chữ nhật: "));
            console.log(
                `Chu vi hình chữ nhật: ${rectanglePerimeter(
                    length,
                    width
                ).toFixed(2)}`
            );
            break;

        case 5:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
}
