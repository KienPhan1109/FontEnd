const text = document.getElementById("text");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let size = 16;

plus.addEventListener("click", () => {
    size += 2;
    text.style.fontSize = size + "px";
});

minus.addEventListener("click", () => {
    size -= 2;
    text.style.fontSize = size + "px";
});
