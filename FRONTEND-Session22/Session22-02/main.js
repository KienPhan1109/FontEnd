let numbers = [2, 5, 7, 4, 1, 8, 6];

let search = prompt("Nhập vào số bất kỳ: ");

let found = 0;
for (let num of numbers) {
    if (search == num) {
        found = 1;
        break;
    }
}

(found) ? alert ("Bingo") : alert ("Chúc bạn may mắn lần sau");