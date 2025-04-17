let savedColor = localStorage.getItem("selectedColor");

if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}

let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let purple = document.getElementById('purple');

function changeBackground(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("selectedColor", color);
}

red.addEventListener("click", () => changeBackground("red"));
blue.addEventListener("click", () => changeBackground("blue"));
yellow.addEventListener("click", () => changeBackground("gold"));
purple.addEventListener("click", () => changeBackground("purple"));
