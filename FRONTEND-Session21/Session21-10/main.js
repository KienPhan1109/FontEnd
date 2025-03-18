let n = Number(prompt("Nhập vào một số: "));

if (n < 0 || !Number(n))
{
    alert("Không hợp lệ");
} 
else {
    let count = 0;
    let num = 2;

    while (count < n) {
        let isPrime = true;

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            document.writeln(`${num} `);
            count++;
        }

        num++;
    }
}
