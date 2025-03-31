// Hàm nhập lựa chọn
function inputChoice() {
    let choice = Number(prompt("Nhập vào lựa chọn của bạn:"));
    return choice;
}

// Hàm hiển thị danh sách sản phẩm
function displayProducts() {
    console.log("\n----- Danh sách sản phẩm -----");
    for (let i = 0; i < products.length; i++) {
        console.log(
            `${i + 1}. ${products[i][0]} - Số lượng: ${products[i][1]} - Giá: ${
                products[i][2]
            }`
        );
    }
}

// Hàm hiển thị danh sách giỏ hàng
function displayCarts() {
    console.log("\n----- Danh sách giỏ hàng -----");
    for (let i = 0; i < cart.length; i++) {
        console.log(
            `${i + 1}. ${cart[i][0]} - Số lượng: ${cart[i][1]} - Giá: ${
                cart[i][2]
            }`
        );
    }
}

function selectProducts() {
    displayProducts();
    let nameProduct = prompt("Nhập tên sản phẩm cần mua:").toLowerCase();

    let foundIndex = -1;
    for (let i = 0; i < products.length; i++) {
        if (products[i][0].toLowerCase() === nameProduct) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex === -1) {
        console.log("Sản phẩm không tồn tại!");
        return;
    }

    let availableQuantity = products[foundIndex][1];

    if (availableQuantity <= 0) {
        console.log("Sản phẩm đã hết hàng!");
        return;
    }

    let quantity = Number(
        prompt(`Nhập số lượng muốn mua (Còn lại: ${availableQuantity}):`)
    );

    if (isNaN(quantity) || quantity <= 0 || quantity > availableQuantity) {
        console.log("Số lượng không hợp lệ!");
        return;
    }

    products[foundIndex][1] -= quantity;

    let cartIndex = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === products[foundIndex][0]) {
            cartIndex = i;
            break;
        }
    }

    if (cartIndex !== -1) {
        cart[cartIndex][1] += quantity;
    } else {
        cart.push([products[foundIndex][0], quantity, products[foundIndex][2]]);
    }

    console.log("Sản phẩm đã được thêm vào giỏ hàng!");
    displayCarts();
}

function totalSum() {
    if (cart.length === 0) {
        console.log("\nGiỏ hàng trống!");
        return;
    }

    console.log("\n----- HÓA ĐƠN MUA HÀNG -----");
    let totalNum = 0;

    for (let i = 0; i < cart.length; i++) {
        let itemTotal = cart[i][1] * cart[i][2];
        totalNum += itemTotal;

        console.log(
            `${i + 1}. ${cart[i][0]} - Số lượng: ${cart[i][1]} - Đơn giá: ${
                cart[i][2]
            }đ - Thành tiền: ${itemTotal}đ`
        );
    }

    console.log(`\nTổng số tiền cần thanh toán: ${totalNum}`);
}

let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000],
];

let cart = [];

while (true) {
    console.log("\n1. Xem danh sách sản phẩm có sẵn trong cửa hàng.");
    console.log("\n2. Chọn sản phẩm để mua.");
    console.log("\n3. Tính tổng tiền và hiển thị hóa đơn.");
    console.log("\n4. Thoát");

    let choice = inputChoice();
    switch (choice) {
        case 1:
            displayProducts();
            break;

        case 2:
            selectProducts();
            break;

        case 3:
            totalSum();
            break;

        case 4:
            console.log("\nThoát chương trình!");
            break;

        default:
            break;
    }
    if (choice == 4) break;
}
