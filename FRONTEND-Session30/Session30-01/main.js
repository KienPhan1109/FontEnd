let products = [
    {
        id: 1,
        name: "Mèn Mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "Mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "Cơm Lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "Bánh Đậu Xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh",
    },
];

let cart = [];

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn của bạn:"));
        if (isNaN(choice) || choice <= 0)
            console.log("Giá trị nhập vào không hợp lệ!");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

function displayProducts(products) {
    if (products.length === 0) {
        console.log("Chưa có sản phẩm!");
        return;
    }

    let categories = {};
    products.forEach((product) => {
        if (!categories[product.category]) categories[product.category] = [];
        categories[product.category].push(product);
    });

    console.log("Danh sách sản phẩm");
    for (let category in categories) {
        console.log(`\n   Category: ${category}`);
        categories[category].forEach((product) => {
            console.log(`\n   ID: ${product.id}`);
            console.log(`   Name: ${product.name}`);
            console.log(`   Price: ${product.price}`);
            console.log(`   Quantity: ${product.quantity}`);
            console.log("   -----------------------------");
        });
    }
}

function addCarts(cart, products) {
    let id;
    do {
        id = Number(prompt("Nhập vào id sản phẩm"));
        if (isNaN(id) || id <= 0) console.log("Id sản phẩm không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let product = products.find((p) => p.id === id);

    if (!product) {
        console.log("ID sản phẩm không tồn tại!");
        return;
    }

    if (product.quantity === 0) {
        console.log("Số lượng sản phẩm đã hết!");
        return;
    }

    let quantity;
    do {
        quantity = Number(prompt("Nhập vào số lượng sản phẩm"));
        if (isNaN(quantity) || quantity <= 0 || quantity > product.quantity)
            console.log("Số lượng sản phẩm không hợp lệ!");
    } while (isNaN(quantity) || quantity <= 0 || quantity > product.quantity);

    product.quantity -= quantity;

    let cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            category: product.category,
        });
    }

    console.log("Thêm sản phẩm thành công!");
}

function sortProducts(products) {
    while (true) {
        console.log(`\n   Chọn cách sắp xếp`);
        console.log("   1. Sắp xếp theo giá tăng dần");
        console.log("   2. Sắp xếp theo giá giảm dần");
        console.log("   3. Quay lại menu chính");
        let choice = inputChoice();

        if (choice === 3) break;

        switch (choice) {
            case 1:
                products.sort((a, b) => a.price - b.price);
                console.log("Đã sắp xếp theo giá tăng dần!");
                displayProducts(products);
                break;

            case 2:
                products.sort((a, b) => b.price - a.price);
                console.log("Đã sắp xếp theo giá giảm dần!");
                displayProducts(products);
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

function displayCart(cart) {
    if (cart.length === 0) {
        console.log("\nGiỏ hàng trống!");
        return;
    }

    console.log("\nDanh sách sản phẩm trong giỏ hàng:");
    let totalPrice = 0;
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        console.log(`\n   ID: ${item.id}`);
        console.log(`      Name: ${item.name}`);
        console.log(`      Price: ${item.price}`);
        console.log(`      Quantity: ${item.quantity}`);
        console.log(`      Subtotal: ${itemTotal}`);
        console.log("   -----------------------------");
    });

    console.log(`\n   Tổng số tiền: ${totalPrice}`);
}

function menuChoice() {
    while (true) {
        console.log("\n1. Hiển thị danh sách");
        console.log("2. Mua sản phẩm");
        console.log("3. Sắp xếp sản phẩm");
        console.log("4. Tính tổng số tiền trong giỏ hàng");
        console.log("5. Thoát");

        let choice = inputChoice();

        if (choice === 5) {
            console.log("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                displayProducts(products);
                break;

            case 2:
                addCarts(cart, products);
                break;

            case 3:
                sortProducts(products);
                break;

            case 4:
                displayCart(cart);
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
