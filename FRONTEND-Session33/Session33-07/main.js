const products = [
    { id: 1, name: "Laptop Dell XPS 15", price: 35990000, image: "../IMG/laptop.png" },
    { id: 2, name: "iPhone 15 Pro Max", price: 32990000, image: "../IMG/phone.png" },
    { id: 3, name: "Samsung Galaxy S24 Ultra", price: 28990000, image: "../IMG/phone2.png" },
    { id: 4, name: "Tai nghe Sony WH-1000XM5", price: 7990000, image: "../IMG/tel.png" },
    { id: 5, name: "Apple Watch Series 9", price: 11990000, image: "../IMG/clock.png" },
    { id: 6, name: "Loa JBL Charge 5", price: 3990000, image: "../IMG/image.png" },
    { id: 7, name: "Laptop Dell XPS 15", price: 35990000, image: "../IMG/laptop.png" },
    { id: 8, name: "iPhone 15 Pro Max", price: 32990000, image: "../IMG/phone.png" },
    { id: 9, name: "Samsung Galaxy S24 Ultra", price: 28990000, image: "../IMG/phone2.png" },
];

let cart = [];

function displayProduct(products) {
    let rowContainer = document.querySelector(".row");
    rowContainer.innerHTML = "";

    products.forEach((p) => {
        let col = document.createElement("div");
        col.classList.add("col-md-3", "mb-4");

        col.innerHTML = `
            <div class="card shadow p-3 h-100">
                <img src="${p.image}" class="card-img-top product-img" alt="${p.name}" />
                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">${p.price.toLocaleString()} VNĐ</p>
                    <button type="button" class="btn btn-success btn-add" data-id="${p.id}">Thêm vào giỏ hàng</button>
                </div>
            </div>
        `;

        rowContainer.appendChild(col);
    });
    handleAddToCartButtons();
}

function searchProduct(products) {
    document.getElementById("search").addEventListener("click", () => {
        let key = document.getElementById("inputSearch").value.toLowerCase();
        let filterProducts = products.filter((p) =>
            p.name.toLowerCase().includes(key)
        );
        if (filterProducts.length === 0)
            return alert("Không tìm thấy sản phẩm!");
        displayProduct(filterProducts);
    });
}

function addToCart(productId) {
    let product = products.find((p) => p.id == productId);
    if (!product) return;

    let item = cart.find((p) => p.id == productId);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.querySelector(".fixed .card-body");
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
        return;
    }

    let html = cart
        .map(
            (p) => `
        <div class="border-bottom mb-2 pb-2">
            <b>${p.name}</b>
            <div class="d-flex align-items-center mt-2 mb-2">
                <button class="btn btn-sm btn-success me-1 btn-decrease" data-id="${p.id}">-</button>
                <span>${p.quantity}</span>
                <button class="btn btn-sm btn-success ms-1 btn-increase" data-id="${p.id}">+</button>
                <button class="btn btn-sm btn-danger ms-2 btn-remove" data-id="${p.id}">x</button>
            </div>
            <div class="text-danger">${p.price.toLocaleString()}₫ x ${p.quantity}</div>
        </div>
    `
        )
        .join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartContainer.innerHTML = `
        ${html}
        <hr />
        <p class="text-end"><b>Tổng:</b> ${total.toLocaleString()}₫</p>
        <button class="btn btn-primary w-100 btn-checkout">Thanh toán</button>
    `;

    handleCartActions();
    handleCheckout();
}

function handleCartActions() {
    document.querySelectorAll(".btn-increase").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const item = cart.find((p) => p.id == id);
            if (item) {
                item.quantity += 1;
                updateCartUI();
            }
        });
    });

    document.querySelectorAll(".btn-decrease").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const item = cart.find((p) => p.id == id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter((p) => p.id != id);
                }
                updateCartUI();
            }
        });
    });

    document.querySelectorAll(".btn-remove").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            cart = cart.filter((p) => p.id != id);
            updateCartUI();
        });
    });
}

function handleAddToCartButtons() {
    const buttons = document.querySelectorAll(".btn-add");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            addToCart(id);
        });
    });
}

function handleCheckout() {
    const checkoutBtn = document.querySelector(".btn-checkout");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Giỏ hàng trống!");
                return;
            }

            const total = cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );

            const confirmCheckout = confirm(
                `Xác nhận thanh toán đơn hàng với tổng cộng ${total.toLocaleString()}₫?`
            );

            if (confirmCheckout) {
                alert("Cảm ơn bạn đã mua hàng!");

                cart = [];
                updateCartUI();
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", () => {
    displayProduct(products);
    searchProduct(products);
    updateCartUI();
});
