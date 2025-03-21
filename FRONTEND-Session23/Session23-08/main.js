let numFibonacci = Number(prompt("Nhập vào số phần tử trong mảng:"));
if (isNaN(numFibonacci) || numFibonacci <= 0) {
    console.log("Dữ liệu không hợp lệ");
} else {
    let a = [];
    let f0 = 0, f1 = 1;

    if (numFibonacci >= 1) a.push(f0);
    if (numFibonacci >= 2) a.push(f1);

    for (let i = 2; i < numFibonacci; i++) {
        let fn = f0 + f1;
        a.push(fn);
        f0 = f1;
        f1 = fn;
    }

    let b = new Array(numFibonacci);
    for (let i = 0; i < numFibonacci; i++) {
        b[i] = Number(prompt(`Nhập vào phần tử thứ ${i + 1}:`));
    }

    let found = false;
    for (let i = 0; i < numFibonacci; i++) {
        if (a[i] !== b[i]) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log("Không phải dãy số Fibonacci");
    } else {
        console.log("Là dãy số Fibonacci");
    }
}
