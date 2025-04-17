const modeToggle = document.querySelector(".dark-mode-toggle");
const modeIcon = document.getElementById("mode-icon");
const body = document.body;

let savedMode = localStorage.getItem("theme");

if (savedMode === "dark") {
    body.classList.add("dark-mode");
    modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png";
} else {
    body.classList.remove("dark-mode");
    modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png";
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    if (isDark) {
        localStorage.setItem("theme", "dark");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png";
    } else {
        localStorage.setItem("theme", "light");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png";
    }
});
