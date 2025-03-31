function maxNumber(number) {
    if (Number.isNaN(Number(number))) {
        console.log("Dữ liệu không hợp lệ!");
        return;
    }
    let arr = String(number).split("");
    let newArr = arr.sort((x, y) => y - x);
    return newArr.join("");
}

console.log(maxNumber(2941));
console.log(maxNumber(3875));
console.log(maxNumber("1h8t"));
