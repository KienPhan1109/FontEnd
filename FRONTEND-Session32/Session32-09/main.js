const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const container = document.querySelector(".container");
const progress = document.getElementById("progress");

let opacity = 0.1;
let width = 0;

plus.addEventListener("click", () => {
    if (progress.style.width != "100%") {
        opacity += 0.05;
        width += 5;
        container.style.opacity = opacity;
        progress.style.width = width + "%";
    }
});

minus.addEventListener("click", () => {
    if (progress.style.width > "0%") {
        opacity -= 0.05;
        width -= 5;
        container.style.opacity = opacity;
        progress.style.width = width + "%";
    }
});
