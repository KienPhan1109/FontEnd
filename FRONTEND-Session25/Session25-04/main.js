function isPrime(n) {
    if (isNaN(n)) {
        return `Dữ liệu không hợp lệ`;
    }
    if (n <= 1) {
        return `Không phải là số nguyên tố`;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return `Không phải là số nguyên tố`;
        }
    }
    return `Là số nguyên tố`;
}

console.log(isPrime(17));
console.log(isPrime(6));
console.log(isPrime("text"));

