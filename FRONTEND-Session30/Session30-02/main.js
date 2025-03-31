let books = [
    {
        id: 1,
        name: "Thế giới rộng lớn, lòng người chật hẹp",
        price: 92000,
        quantity: 100,
        category: "Tâm lý",
    },
    {
        id: 2,
        name: "Hành Tinh Của Một Kẻ Nghĩ Nhiều",
        price: 64500,
        quantity: 250,
        category: "Tâm lý",
    },
    {
        id: 3,
        name: "Đại Dương Đen",
        price: 158400,
        quantity: 10,
        category: "Nội tâm",
    },
];

let cart = [];

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn:"));
        if (isNaN(choice) || choice <= 0) console.log("Lựa chọn không hợp lệ!");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

function displayBooks(books) {
    if (books.length === 0) {
        console.log("Sách trong kho trống!");
        return;
    }

    let category;
    do {
        category = prompt("Nhập vào thể loại sách:");
        if (!category) console.log("Dữ liệu nhập không được bỏ trống");
    } while (!category);

    let categories = books.filter((value) => value.category === category);

    if (categories.length === 0) {
        console.log("Không có thể loại sách này!");
        return;
    }

    console.log(`\n   Category: ${category}`);
    categories.forEach((value) => {
        console.log(`\n   ID: ${value.id}`);
        console.log(`   Name: ${value.name}`);
        console.log(`   Price: ${value.price}`);
        console.log(`   Quantity: ${value.quantity}`);
    });
}

function addBook(books) {
    let category;
    do {
        category = prompt("Nhập vào thể loại sách");
        if (!category) console.log("Thể loại sách không được để trống!");
    } while (!category);

    let categoryExists = books.some(
        (b) => b.category.toLowerCase() === category.toLowerCase()
    );

    if (!categoryExists) {
        console.log("Không có thể loại sách này!");
        return;
    }

    let n;
    do {
        n = Number(prompt("Nhập vào số lượng sách muốn thêm:"));
        if (isNaN(n) || n <= 0) console.log("Giá trị nhập vào không hợp lệ!");
    } while (isNaN(n) || n <= 0);

    while (n > 0) {
        let id = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

        let name;
        do {
            name = prompt("Nhập vào tên sách mới:");
            if (!name) console.log("Tên sách không được để trống!");
        } while (!name);

        let price;
        do {
            price = Number(prompt("Nhập vào giá sách:"));
            if (isNaN(price) || price <= 0)
                console.log("Giá trị nhập vào không hợp lệ!");
        } while (isNaN(price) || price <= 0);

        let quantity;
        do {
            quantity = Number(prompt("Nhập vào số lượng sách:"));
            if (isNaN(quantity) || quantity <= 0)
                console.log("Giá trị nhập vào không hợp lệ!");
        } while (isNaN(quantity) || quantity <= 0);

        books.push({ id, name, price, quantity, category });
        n--;
    }
    console.log("Thêm sách thành công!");
}

function addCarts(cart, books) {
    let id;
    do {
        id = Number(prompt("Nhập vào id sách"));
        if (isNaN(id) || id <= 0) console.log("Id sách không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let book = books.find((b) => b.id === id);

    if (!book) {
        console.log("ID sách không tồn tại!");
        return;
    }

    if (book.quantity === 0) {
        console.log("Số lượng sách đã hết!");
        return;
    }

    let quantity;
    do {
        quantity = Number(prompt("Nhập vào số lượng sách"));
        if (isNaN(quantity) || quantity <= 0 || quantity > book.quantity)
            console.log("Số lượng sách không hợp lệ!");
    } while (isNaN(quantity) || quantity <= 0 || quantity > book.quantity);

    book.quantity -= quantity;

    let cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            id: book.id,
            name: book.name,
            price: book.price,
            quantity: quantity,
            category: book.category,
        });
    }

    console.log("Thêm sách thành công!");
}

function menuChoice() {
    while (true) {
        console.log("\n===== MENU =====");
        console.log("1. Hiển thị danh sách sách");
        console.log("2. Thêm sách mới");
        console.log("3. Tìm kiếm sách");
        console.log("4. Mua sách");
        console.log("5. Sắp xếp sách");
        console.log("6. Tính tổng số lượng sách");
        console.log("7. Hiển thị tổng số lượng sách trong kho");
        console.log("8. Thoát");

        let choice = inputChoice();

        if (choice === 8) {
            console.log("Thoát chương trình!");
            return;
        }

        switch (choice) {
            case 1:
                displayBooks(books);
                break;

            case 2:
                addBook(books);
                break;

            case 3:
                break;

            case 4:
                addCarts(cart, books);
                break;

            case 5:
                break;

            case 6:
                break;

            case 7:
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
