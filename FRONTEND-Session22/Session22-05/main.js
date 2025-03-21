let a = [1, 2, 3, 4, 5];
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < a.length; i++) {
    (a[i] <= 0) ? null : (a[i] % 2 == 0) ? sumEven += a[i] : sumOdd += a[i];
}
console.log(`Tổng các số chẵn: ${sumEven}`);
console.log(`Tổng các số lẻ: ${sumOdd}`);
