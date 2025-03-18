let n = Number(prompt("Nhập vào một số: "));

if (n < 0 || !Number(n))
{
    alert("Không hợp lệ");
} 
else 
{
    let f0 = 0;
    let f1 = 1;
    let fn = 0;
    
    while (n > 0) {
        f0 = f1;
        f1 = fn;
        fn = f1 + f0;
        document.writeln(` ${fn}`);
        n--;
    }
}