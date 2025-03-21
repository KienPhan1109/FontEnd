let a = [4, 1, 2, 7, 12, 13, 16, 20, 1, 20];
let count = []
for (let i = 0; i < a.length; i++) {
    (a[i] > 10) ? count.push(a[i]) : null;
}

(count.length === 0) ? console.log("Không có số nào lớn hơn 10") : console.log(count);

