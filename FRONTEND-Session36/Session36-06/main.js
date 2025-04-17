const stars = document.querySelectorAll(".stars");
const selectedRating = document.getElementById("selected-rating");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

let currentRating = 0;
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function saveReviews() {
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

function renderReviews() {
    commentList.innerHTML = "";
    reviews.forEach(review => {
        const li = document.createElement("li");

        const starSpan = document.createElement("span");
        starSpan.textContent = "★".repeat(review.rating);

        const comment = document.createElement("b");
        comment.textContent = review.comment;

        li.appendChild(starSpan);
        li.appendChild(comment);
        commentList.appendChild(li);
    });
}

stars.forEach(star => {
    star.addEventListener("click", () => {
        currentRating = parseInt(star.getAttribute("data-value"));
        updateStarDisplay();
    });

    star.addEventListener("mouseover", () => {
        const value = parseInt(star.getAttribute("data-value"));
        highlightStars(value);
    });

    star.addEventListener("mouseout", () => {
        highlightStars(currentRating);
    });
});

function updateStarDisplay() {
    highlightStars(currentRating);
    if (currentRating === 0) {
        selectedRating.textContent = "Bạn chưa đánh giá.";
    } else {
        selectedRating.textContent = `Bạn đánh giá ${currentRating} sao.`;
    }
}

function highlightStars(rating) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute("data-value"));
        star.classList.toggle("active", value <= rating);
    });
}

function submitReview() {
    const comment = commentInput.value.trim();

    if (currentRating === 0) {
        alert("Vui lòng chọn số sao để đánh giá.");
        return;
    }

    if (comment === "") {
        alert("Vui lòng nhập nội dung bình luận.");
        return;
    }

    const newReview = {
        rating: currentRating,
        comment
    };

    reviews.push(newReview);
    saveReviews();
    renderReviews();

    currentRating = 0;
    commentInput.value = "";
    updateStarDisplay();
}

renderReviews();
updateStarDisplay();
