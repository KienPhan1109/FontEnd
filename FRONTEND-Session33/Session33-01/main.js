const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        toggle.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    } else {
        password.type = "password";
        toggle.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
});
