let a = [1, 2, 3, 4, 5, 1, 12, 3, 4, 5, 12, 12];
let countValue = {};

for (let i = 0; i < a.length; i++) {
    let num = a[i];

    if (!countValue[num]) {
        countValue[num] = 1;
    } else {
        countValue[num]++;
    }
}

let max = 0;
let number = null;

for (let value in countValue) {
    if (countValue[value] > max) {
        max = countValue[value];
        number = value;
    } else if (countValue[value] === max && value < number) {
        number = value;
    }
}

console.log(`Số ${number} xuất hiện nhiều nhất với ${max} lần.`);
