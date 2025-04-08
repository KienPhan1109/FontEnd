document.getElementById("btn").addEventListener("click", function () {
    let bg = document.getElementById("background");
    let text = document.getElementById("btn");
    if (bg.style.backgroundColor === "black") {
        bg.style.backgroundColor = "white";
        text.textContent = "Toggle dark mode";
        bg.style.color = "black";
    } else {
        bg.style.color = "white";
        bg.style.backgroundColor = "black";
        text.textContent = "Toggle light mode";
    }
});
