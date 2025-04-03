let phones = [
    {
        id: 1,
        name: "IPhone 15 Pro Max",
        price: "24000000",
        quantity: 100,
        company: "Apple",
    },
    {
        id: 2,
        name: "Samsung S24 Ultra",
        price: "22000000",
        quantity: 200,
        company: "Samsung",
    },
    {
        id: 1,
        name: "OPPO A5 Pro",
        price: "8490000",
        quantity: 50,
        company: "Oppo",
    },
    {
        id: 4,
        name: "IPhone 16 Pro Max",
        price: "34000000",
        quantity: 100,
        company: "Apple",
    },
];

let cart = [];

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn của bạn:"));
        if (isNaN(choice) || choice <= 0)
            console.log("Dữ liệu nhập vào không hợp lệ!");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

function displayPhones(phones) {
    if (phones.length === 0) return console.log("Danh sách điện thoại trống!");

    let companies = {};
    phones.forEach((phone) => {
        if (!companies[phone.company]) companies[phone.company] = [];
        companies[phone.company].push(phone);
    });

    console.log("Danh sách điện thoại");
    for (let company in companies) {
        console.log(`\n   Company: ${company}`);
        companies[company].forEach((phone) => {
            console.log(`\n   ID: ${phone.id}`);
            console.log(`   Name: ${phone.name}`);
            console.log(`   Price: ${phone.price}`);
            console.log(`   Quantity: ${phone.quantity}`);
            console.log("   -----------------------------");
        });
    }
}

function addPhone(phones) {
    let n;
    do {
        n = Number(prompt("Nhập vào số điện thoại muốn thêm:"));
        if (isNaN(n) || n <= 0) console.log("Dữ liệu nhập vào không hợp lệ!");
    } while (isNaN(n) || n <= 0);

    while (n > 0) {
        let id =
            phones.length > 0
                ? Math.max(...phones.map((phone) => phone.id)) + 1
                : 1;

        let name;
        do {
            name = prompt("Nhập vào tên điện thoại:");
            if (!name) console.log("Tên điện thoại không được để trống!");
        } while (!name);

        let price;
        do {
            price = Number(prompt("Nhập vào giá tiền:"));
            if (isNaN(price) || price <= 0)
                console.log("Dữ liệu nhập vào không hợp lệ!");
        } while (isNaN(price) || price <= 0);

        let quantity;
        do {
            quantity = Number(prompt("Nhập vào số lượng:"));
            if (isNaN(quantity) || quantity <= 0)
                console.log("Dữ liệu nhập vào không hợp lệ!");
        } while (isNaN(quantity) || quantity <= 0);

        let company;
        do {
            company = prompt("Nhập vào tên hãng điện thoại:");
            if (!company)
                console.log("Tên hãng điện thoại không được để trống!");
        } while (!company);

        phones.push({ id, name, price, quantity, company });
        n--;
    }
    console.log("Thêm điện thoại thành công!");
}

function findPhoneByName(books) {
    if (books.length === 0) return console.log("Danh sách điện thoại trống!");

    let name;
    do {
        name = prompt("Nhập vào tên điện thoại cần tìm kiếm:");
        if (!name) console.log("Tên điện thoại không được để trống!");
    } while (!name);

    let find = books.filter((phone) =>
        phone.name.toLowerCase().includes(name.toLowerCase())
    );

    if (find.length === 0)
        return console.log(`Không tìm thấy điện thoại có tên ${name}`);

    console.log(`Đã tìm thấy điện thoại có tên ${name}`);
    displayPhones(find);
}

function addCarts(books, cart) {
    if (books.length === 0) return console.log("Danh sách điện thoại trống!");

    let id;
    do {
        id = Number(prompt("Nhập vào id điện thoại cần mua:"));
        if (isNaN(id) || id <= 0) console.log("Dữ liệu nhập vào không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let phone = books.find((phone) => phone.id === id);

    if (!phone) return console.log(`Không tìm thấy điện thoại có id ${id}`);
    if (phone.quantity === 0) return console.log(`Điện thoại đã hết hàng!`);

    let quantity;
    do {
        quantity = Number(prompt("Nhập vào số lượng điện thoại cần mua:"));
        if (isNaN(quantity) || quantity <= 0 || quantity > phone.quantity)
            console.log("Số lượng không hợp lệ!");
    } while (isNaN(quantity) || quantity <= 0 || quantity > phone.quantity);

    phone.quantity -= quantity;

    let cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            id: phone.id,
            name: phone.name,
            price: phone.price,
            quantity: quantity,
            company: phone.company,
        });
    }

    console.log("Mua điện thoại thành công!");
}

function payCart(cart) {
    if (cart.length === 0) return console.log("Giỏ hàng trống!");

    console.log("\nGiỏ hàng của bạn");
    cart.forEach((phone) => {
        console.log(`\n   ID: ${phone.id}`);
        console.log(`   Name: ${phone.name}`);
        console.log(`   Price: ${phone.price}`);
        console.log(`   Quantity: ${phone.quantity}`);
        console.log("   -----------------------------");
    });

    let countPhone = cart.reduce((total, phone) => {
        return total + phone.quantity;
    }, 0);
    let totalPrice = cart.reduce((sum, phone) => {
        return sum + phone.quantity * phone.price;
    }, 0);

    console.log(`Tổng số lượng điện thoại trong giỏ hàng: ${countPhone}`);
    console.log(`\nTổng Tiền: ${totalPrice}`);

    let c = confirm("Bạn muốn thanh toán ?");
    if (c) {
        cart.length = 0;
        console.log("Thanh toán thành công!");
    } else {
        console.log("Hủy thanh toán!");
    }
}

function sortPhoneByPrice(phones) {
    while (true) {
        console.log("\n   Lựa chọn sắp xếp");
        console.log("   1. Sắp xếp tăng dần");
        console.log("   2. Sắp xếp giảm dần");
        console.log("   3. Thoát");

        let choice = inputChoice();

        if (choice === 3) return console.log("Thoát sắp xếp");

        switch (choice) {
            case 1:
                phones.sort((x, y) => x.price - y.price);
                console.log("Sắp xếp tăng dần thành công!");
                displayPhones(phones);
                break;

            case 2:
                phones.sort((x, y) => y.price - x.price);
                console.log("Sắp xếp giảm dần thành công!");
                displayPhones(phones);
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

function calculateTotalPrice(phones) {
    phones.forEach((phone) => {
        console.log(`\n   ID: ${phone.id}`);
        console.log(`   Name: ${phone.name}`);
        console.log(`   Price: ${phone.price}`);
        console.log(`   Quantity: ${phone.quantity}`);
        console.log(`   Total: ${phone.quantity * phone.price}`);
        console.log("   -----------------------------");
    });
}

function countPhonesByCompany(phones) {
    if (phones.length === 0) {
        console.log("Không có điện thoại nào trong kho!");
        return;
    }

    let companyCount = phones.reduce((acc, phone) => {
        acc[phone.company] = (acc[phone.company] || 0) + phone.quantity;
        return acc;
    }, {});

    console.log("\nTổng số lượng điện thoại theo hãng");
    for (let company in companyCount) {
        console.log(`\n   ${company}: ${companyCount[company]}`);
    }
}

function mainMenu() {
    while (true) {
        console.log("\n1. Hiển thị danh sách điện thoại.");
        console.log("2. Thêm điện thoại mới vào cửa hàng.");
        console.log("3. Tìm kiếm điện thoại.");
        console.log("4. Mua điện thoại.");
        console.log("5. Thanh toán tất cả điện thoại.");
        console.log("6. Sắp xếp điện thoại theo giá.");
        console.log("7. Hiển thị tổng số tiền của các điện thoại.");
        console.log("8. Hiển thị tổng số lượng điện thoại theo từng hãng");
        console.log("9. Thoát chương trình");

        let choice = inputChoice();

        if (choice === 9) return console.log("Thoát chương trình!!!");

        switch (choice) {
            case 1:
                displayPhones(phones);
                break;

            case 2:
                addPhone(phones);
                break;

            case 3:
                findPhoneByName(phones);
                break;

            case 4:
                addCarts(phones, cart);
                break;

            case 5:
                payCart(cart);
                break;

            case 6:
                sortPhoneByPrice(phones);
                break;

            case 7:
                calculateTotalPrice(phones);
                break;

            case 8:
                countPhonesByCompany(phones);
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

mainMenu();
