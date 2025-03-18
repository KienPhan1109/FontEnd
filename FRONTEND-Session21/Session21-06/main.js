let n = Number(prompt("Nhập vào số bất kỳ: "));

for (let i = 1; i <= n; i++) {
    (n % i === 0) ? document.writeln(i) : null;
}