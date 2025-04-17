// Dữ liệu mẫu
let likes = JSON.parse(localStorage.getItem("likes"));

if (!likes) {
    likes = [
        { id: 1, like: 0 },
        { id: 2, like: 0 },
        { id: 3, like: 0 },
    ];
    localStorage.setItem("likes", JSON.stringify(likes));
}

function displayLike() {
    let numbers = document.querySelectorAll('.like .number');
    likes.forEach((item, index) => {
        if (numbers[index]) {
            numbers[index].textContent = item.like;
        }
    });
}

function handleLikeButtons() {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            likes[index].like += 1;
            localStorage.setItem("likes", JSON.stringify(likes));
            displayLike();
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    displayLike();
    handleLikeButtons();
});
