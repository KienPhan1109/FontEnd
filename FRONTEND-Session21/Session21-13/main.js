let n = 10;

while (n > 0) {
    for (let i = 0; i < n; i++) {
        document.writeln("*")
    }
    document.writeln("<br>");
    n--;
}

document.writeln("<br>");
let m = 1;1
while (m < 10) {
    for (let i = 0; i < m; i++) {
        document.writeln("*")
    }
    document.writeln("<br>");
    m++;
}

document.writeln("<br>");
let o = 10;
let count = 0;
while (o > 0) {
    for (let i = 1; i <= 10; i++) {
        if (i == o)
        {
            for (let j = o; j < o + count; j++) {
                document.writeln("* ");
            }
            count++;
        }
        else
        { 
            document.writeln("&nbsp;&nbsp;");
        }
    }
    document.writeln("<br>");
    o--;
}

document.writeln("<br>");
let p = 10;
while (p > 0) {
    for (let i = 10; i > 1; i--) {
        if (i <= p)
        {
            document.writeln("* ");
        }
        else
        { 
            document.writeln("&nbsp;&nbsp;");
        }
    }
    document.writeln("<br>");
    p--;
}