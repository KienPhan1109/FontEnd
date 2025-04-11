const btn = document.getElementById('btn');
const number = document.getElementById('number');
let count = 1;

btn.addEventListener('click', function () {
    number.innerHTML = count++;
})