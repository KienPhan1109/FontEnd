const images = document.querySelectorAll("img");
const overlay = document.getElementById("overlay");
const zoomed = document.getElementById("zoomed");

images.forEach((img) => {
    img.addEventListener("click", () => {
        zoomed.src = img.src;
        overlay.style.display = "flex";
    });
});

overlay.addEventListener("click", (e) => {
    if (e.target !== zoomed) {
        overlay.style.display = "none";
    }
});