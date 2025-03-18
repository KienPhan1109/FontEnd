for (let num = 100; num <= 999; num++) {

    let a = Math.floor(num / 100);
    let b = Math.floor((num % 100) / 10);
    let c = num % 10;

    let sum = a ** 3 + b ** 3 + c ** 3;

    if (sum === num) {
        document.writeln(`${num} `);
    }
}
