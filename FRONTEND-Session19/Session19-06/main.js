let a = Number(prompt("Nhập vào a: "));
let b = Number(prompt("Nhập vào b: "));
let c = Number(prompt("Nhập vào c: "));

let denta = Math.pow(b, 2) - 4 * a * c;

if (denta < 0) {
    alert("Phương trình vô nghiệm");
}
else if (denta == 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép x1 = x2 = " + x);
}
else {
    let x1 = (-b - Math.sqrt(denta)) / (2 * a);
    let x2 = (-b + Math.sqrt(denta)) / (2 * a);
    alert("Phương trình có hai nghiệm phân biệt: " + "\n" + "x1 = " + x1 + "; x2 = " + x2);
}