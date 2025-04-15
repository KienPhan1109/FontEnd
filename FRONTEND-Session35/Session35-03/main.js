// Dữ liệu mẫu xài 1 lần
// const products = [
//     {
//         id: 1,
//         name: "Laptop Dell XPS 15",
//         price: 35990000,
//         image: "../IMG/laptop.png",
//         description:
//             "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB",
//     },
//     {
//         id: 2,
//         name: "iPhone 15 Pro Max",
//         price: 32990000,
//         image: "../IMG/phone.png",
//         description:
//             "Điện thoại flagship của Apple với camera 58MP và chip A17 Pro.",
//     },
//     {
//         id: 3,
//         name: "Samsung Galaxy S24 Ultra",
//         price: 28990000,
//         image: "../IMG/phone2.png",
//         description:
//             "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
//     },
//     {
//         id: 4,
//         name: "Tai nghe Sony WH-1000XM5",
//         price: 7990000,
//         image: "../IMG/tel.png",
//         description:
//             "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
//     },
//     {
//         id: 5,
//         name: "Apple Watch Series 9",
//         price: 11990000,
//         image: "../IMG/clock.png",
//         description:
//             "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
//     },
//     {
//         id: 6,
//         name: "Loa JBL Charge 5",
//         price: 3990000,
//         image: "../IMG/image.png",
//         description:
//             "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
//     },
// ];

// localStorage.setItem("products", JSON.stringify(products)) || [];

let products = JSON.parse(localStorage.getItem("products"));

function displayProducts(products) {
    let container = document.querySelector(".container_img");
    container.innerHTML = "";

    products.forEach((p) => {
        let newImg = document.createElement("div");
        newImg.classList.add("img");

        newImg.innerHTML = `
            <img src="${p.image}" alt="">
            <div class="title">${p.name}</div>
            <div class="content">${p.description}</div>
            <div class="price">${p.price.toLocaleString()} VNĐ</div>
            <button class="btn">Buy</button>
        `;
        container.appendChild(newImg);
    });
}

let search = document.getElementById("search");
let btn = document.getElementById("btn");

function searchProduct() {
    btn.addEventListener("click", () => {
        let container = document.querySelector(".container_img");
        let keyword = search.value.trim().toLowerCase();

        container.innerHTML = "";

        let result = products.filter((p) =>
            p.name.toLowerCase().includes(keyword)
        );

        if (result.length > 0) {
            displayProducts(result);
        } else {
            container.innerHTML = "<p>Không tìm thấy sản phẩm nào.</p>";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
    searchProduct();
});
