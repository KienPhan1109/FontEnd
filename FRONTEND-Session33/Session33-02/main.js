const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const count = document.getElementById("count");

btn.addEventListener("click", () => {
    const content = textarea.value;
    count.innerHTML = `${content.length}`;
});
