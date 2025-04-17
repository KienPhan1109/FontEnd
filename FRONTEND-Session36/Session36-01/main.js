let nameInput = document.getElementById('name');
let btn = document.getElementById('btn');
let def = document.getElementById('default');
let none = document.getElementById('none');
let hello = document.getElementById('hello');
let errorName = document.getElementById('error-name');
let rename = document.getElementById('rename');

none.style.display = "none";

window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        def.style.display = "none";
        none.style.display = "inline-block";
        hello.textContent = `👋 Chào bạn, ${savedName}!`;
    } else {
        def.style.display = "block";
        none.style.display = "none";
    }
});

btn.addEventListener('click', () => {
    let username = nameInput.value.trim();
    if (username === "") {
        errorName.textContent = `Vui lòng nhập tên!`;
    } else {
        localStorage.setItem('username', username);
        def.style.display = "none";
        none.style.display = "inline-block";
        hello.textContent = `👋 Chào bạn, ${username}!`;
        errorName.textContent = "";
    }
});

rename.addEventListener('click', () => {
    localStorage.removeItem('username');
    nameInput.value = "";
    def.style.display = "block";
    none.style.display = "none";
});
