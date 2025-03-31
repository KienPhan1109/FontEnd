function sum(arr) {
    if (!Array.isArray(arr)) {
        return console.log("Dữ liệu không hợp lệ!");
    }

    if (arr.length === 0) {
        return console.log("Mảng không có dữ liệu!");
    }

    const totalEven = arr
        .filter((valueEven) => valueEven % 2 == 0)
        .reduce((sumEven, valueEven) => sumEven + valueEven, 0);

    const totalOdd = arr
        .filter((valueOdd) => valueOdd % 2 != 0)
        .reduce((sumOdd, valueOdd) => sumOdd + valueOdd, 0);

    console.log("totalEven = ", totalEven || "Không có số chẵn!");
    console.log("totalOdd = ", totalOdd || "Không có số lẻ!");
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
sum([]);
sum("abc");
