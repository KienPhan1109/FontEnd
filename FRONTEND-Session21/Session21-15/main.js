let count500k = 0;
let count200k = 0;
let count100k = 0;
let count50k = 0;
let count20k = 0;
let count10k = 0;
let count5k = 0;
let count2k = 0;
let count1k = 0;

let price = parseFloat(prompt("Nhập vào số tiền cần rút:"));
if (price % 1000 != 0) {
    alert("Số tiền cần rút phải chia hết cho 1000");
} else {
    let sum = price;
    while (sum > 0) {
        if (sum >= 500000) {
            sum -= 500000;
            count500k++;
        } else if (sum >= 200000) {
            sum -= 200000;
            count200k++;
        } else if (sum >= 100000) {
            sum -= 100000;
            count100k++;
        } else if (sum >= 50000) {
            sum -= 50000;
            count50k++;
        } else if (sum >= 20000) {
            sum -= 20000;
            count20k++;
        } else if (sum >= 10000) {
            sum -= 10000;
            count10k++;
        } else if (sum >= 5000) {
            sum -= 5000;
            count5k++;
        } else if (sum >= 2000) {
            sum -= 2000;
            count2k++;
        } else if (sum >= 1000) {
            sum -= 1000;
            count1k++;
        }
    }
}
(count500k > 0) ? document.writeln(`500.000 - ${count500k} tờ <br>`) : null;
(count200k > 0) ? document.writeln(`200.000 - ${count200k} tờ <br>`) : null;
(count100k > 0) ? document.writeln(`100.000 - ${count100k} tờ <br>`) : null;
(count50k > 0) ? document.writeln(`50.000 - ${count50k} tờ <br>`) : null;
(count20k > 0) ? document.writeln(`20.000 - ${count20k} tờ <br>`) : null;
(count10k > 0) ? document.writeln(`10.000 - ${count10k} tờ <br>`) : null;
(count5k > 0) ? document.writeln(`5.000 - ${count5k} tờ <br>`) : null;
(count2k > 0) ? document.writeln(`2.000 - ${count2k} tờ <br>`) : null;
(count1k > 0) ? document.writeln(`1.000 - ${count1k} tờ <br>`) : null;

