let a = Number(prompt("Nhập a: "));
let b = Number(prompt("Nhập b: "));

temp = 1;

for (let i = 0; i < b; i++) {
    temp *= a;
}

alert(temp);