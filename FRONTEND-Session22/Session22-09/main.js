let a = [12, 1, 2, 3, 4, 5, 1, 12, 3, 4, 5, 12, 12];
let b = [];

for (let i = 0; i < a.length; i++) {
    let found = 0;

    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            found = 1;
            break;
        }
    }

    if (!found) {
        b.push(a[i]);
    }
}

b.sort((x, y) => x - y);

console.log(b);


