let categories = [
    {
        category: "Đồ uống",
        foods: [
            {
                name: "Cà phê sữa",
                price: 25000,
                description: "Cà phê pha với sữa đặc, thơm ngon.",
            },
            {
                name: "Trà sữa trân châu",
                price: 30000,
                description: "Trà sữa truyền thống với trân châu đen.",
            },
        ],
    },
    {
        category: "Món chính",
        foods: [
            {
                name: "Cơm tấm",
                price: 45000,
                description: "Cơm tấm sườn bì chả, ăn kèm nước mắm.",
            },
            {
                name: "Bún bò Huế",
                price: 50000,
                description: "Bún bò Huế cay nồng, đậm đà hương vị miền Trung.",
            },
        ],
    },
    {
        category: "Tráng miệng",
        foods: [
            {
                name: "Bánh flan",
                price: 20000,
                description: "Bánh flan mềm mịn, ăn kèm caramel.",
            },
            {
                name: "Chè thập cẩm",
                price: 25000,
                description:
                    "Chè gồm đậu đỏ, bột lọc, sương sáo và nước cốt dừa.",
            },
        ],
    },
];

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn:"));
        if (isNaN(choice) || choice <= 0 || !choice)
            console.log("Giá trị không hợp lệ");
    } while (isNaN(choice) || choice <= 0 || !choice);
    return choice;
}

function displayFoods(categories) {
    console.log("\nDanh sách món ăn:");
    categories.forEach((category) => {
        console.log(`\nCategory: ${category.category}`);
        category.foods.forEach((food) => {
            console.log(`\n   ${food.name} - ${food.price}`);
            console.log(`   ${food.description}`);
            console.log("   --------------------------------");
        });
    });
}

function inputFoods(categories) {
    let nameCategory;
    do {
        nameCategory = prompt("Nhập vào danh mục món ăn: ");
        if (!nameCategory) console.log("Danh mục không được để trống!");
    } while (!nameCategory);

    let newArray = categories.find(
        (value) => value.category.toLowerCase() === nameCategory.toLowerCase()
    );

    if (!newArray) {
        console.log("Danh mục món ăn không tồn tại!");
        return;
    }

    let n;
    do {
        n = Number(prompt("Nhập vào số lượng món ăn:"));
        if (isNaN(n) || n <= 0 || !n)
            console.log("Số lượng nhập vào không hợp lệ!");
    } while (isNaN(n) || n <= 0 || !n);

    while (n > 0) {
        let name;
        do {
            name = prompt("Nhập vào tên món ăn mới: ");
            if (!name) console.log("Tên món ăn không được để trống!");
        } while (!name);

        let price;
        do {
            price = Number(prompt("Nhập vào giá món ăn:"));
            if (isNaN(price) || price <= 0 || !price)
                console.log("Giá nhập vào không hợp lệ!");
        } while (isNaN(price) || price <= 0 || !price);

        let description;
        do {
            description = prompt("Nhập vào mô tả món ăn mới: ");
            if (!description) console.log("Mô tả món ăn không được để trống!");
        } while (!description);

        newArray.foods.push({ name, price, description });
        n--;
    }
    console.log("Thêm món ăn thành công!");
}

function deleteFood(categories) {
    let nameCategory;
    do {
        nameCategory = prompt("Nhập vào danh mục món ăn: ");
        if (!nameCategory) console.log("Danh mục không được để trống!");
    } while (!nameCategory);

    let newArray = categories.find(
        (value) => value.category.toLowerCase() === nameCategory.toLowerCase()
    );

    if (!newArray) {
        console.log("Danh mục món ăn không tồn tại!");
        return;
    }

    let name;
    do {
        name = prompt("Nhập vào tên món ăn: ");
        if (!name) console.log("Tên món ăn không được để trống!");
    } while (!name);

    let delIndex = newArray.foods.findIndex(
        (value) => value.name.toLowerCase() === name.toLowerCase()
    );
    if (delIndex === -1) {
        console.log("Không tìm thấy món ăn trong danh mục này!");
        return;
    }
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
        newArray.foods.splice(delIndex, 1);
        console.log("Xóa sản phẩm thành công!");
    } else {
        console.log("Hủy xóa sản phẩm.");
    }
}

function updateFood(categories) {
    let nameCategory;
    do {
        nameCategory = prompt("Nhập vào danh mục món ăn cần cập nhật: ");
        if (!nameCategory) console.log("Danh mục không được để trống!");
    } while (!nameCategory);

    let category = categories.find(
        (value) => value.category.toLowerCase() === nameCategory.toLowerCase()
    );

    if (!category) {
        console.log(`Danh mục không tồn tại!`);
        return;
    }

    let name;
    do {
        name = prompt(`Nhập tên món ăn:`);
        if (!name) console.log("Tên món ăn không được để trống!");
    } while (!name);

    let food = category.foods.find(
        (food) => food.name.toLowerCase() === name.toLowerCase()
    );

    if (!food) {
        console.log(`Không tìm thấy món ăn!`);
        return;
    }

    console.log(`Món ăn hiện tại: ${food.name} - ${food.price}`);
    console.log(`Mô tả: ${food.description}`);

    let newPrice;
    do {
        newPrice = Number(prompt("Nhập giá mới: "));
        if (isNaN(newPrice) || newPrice <= 0) console.log("Giá không hợp lệ!");
    } while (isNaN(newPrice) || newPrice <= 0);

    let newDescription;
    do {
        newDescription = prompt("Nhập mô tả mới: ");
        if (!newDescription) console.log("Mô tả không được để trống!");
    } while (!newDescription);

    food.price = newPrice;
    food.description = newDescription;

    console.log(`Cập nhật thành công!`);
}

function searchFood(categories) {
    let name;
    do {
        name = prompt("Nhập tên món ăn cần tìm: ");
        if (!name) console.log("Tên món ăn không được để trống!");
    } while (!name);

    let found = false;
    categories.forEach((category) => {
        category.foods.forEach((food) => {
            if (food.name.toLowerCase().includes(name.toLowerCase())) {
                console.log(`\nName: ${food.name}`);
                console.log(`Category: ${category.category}`);
                console.log(`Price: ${food.price}`);
                console.log(`Description: ${food.description}`);
                console.log("------------------------------");
                found = true;
            }
        });
    });

    if (!found) {
        console.log(`Không tìm thấy món ăn!`);
    }
}

function menuChoice() {
    while (true) {
        console.log("\n1. Thêm món ăn.");
        console.log("2. Xóa món ăn .");
        console.log("3. Cập nhật thông tin theo tên.");
        console.log("4. Hiển thị toàn bộ menu.");
        console.log("5. Tìm kiếm món ăn theo tên.");
        console.log("6. Thoát.");

        let choice = inputChoice();

        if (choice === 6) {
            console.log("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                inputFoods(categories);
                break;

            case 2:
                deleteFood(categories);
                break;

            case 3:
                updateFood(categories);
                break;

            case 4:
                displayFoods(categories);
                break;

            case 5:
                searchFood(categories);
                break;

            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
