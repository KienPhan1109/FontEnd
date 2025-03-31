function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ!";
    }

    const primeNumbers = arr.filter(num => Number.isInteger(num) && isPrime(num));

    return primeNumbers.length > 0 ? primeNumbers : "Mảng không có phần tử nào!";
}

console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(filterPrimes([])); 
console.log(filterPrimes("abc")); 
