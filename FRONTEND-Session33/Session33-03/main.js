let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lơn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước" },
    { name: "Cocacola", category: "Nước" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Tuy vít", category: "Dụng cụ" },
];

function displayDish() {
    dish.forEach((d) => {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        li.innerHTML = `Tên đồ ăn: ${d.name} - Danh mục: ${d.category} <br><br>`;
        ul.appendChild(li);
    });
}

let arrayCategories = [];

function displayProducts() {
    let category = document.getElementById("category");

    dish.forEach((d) => {
        if (!arrayCategories.includes(d.category)) {
            let option = document.createElement("option");
            option.textContent = d.category;
            option.value = d.category;
            category.appendChild(option);
            arrayCategories.push(d.category);
        }
    });
}

let btn = document.getElementById('btn');

function filterCategory() {
    btn.addEventListener('click', () => {
        let selectedCategory = document.getElementById("category").value;

        let ul = document.querySelector("ul");
        ul.innerHTML = "";

        let filteredDishes = dish.filter(d => d.category === selectedCategory);

        filteredDishes.forEach(d => {
            let li = document.createElement("li");
            li.innerHTML = `Tên đồ ăn: ${d.name} - Danh mục: ${d.category} <br><br>`;
            ul.appendChild(li);
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayDish();
    displayProducts();
    filterCategory();
});
