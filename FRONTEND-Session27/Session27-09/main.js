function isConsecutive(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log("Dữ liệu không hợp lệ!");
        return false;
    }
    let valueEvenNumbers = [];
    let indexEvenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            valueEvenNumbers.push(arr[i]);
        }
    }
    let indexEven = 0;
    valueEvenNumbers.sort((x, y) => x - y);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = valueEvenNumbers[indexEven];
            indexEven++;
        }
    }
    console.log(arr);
}

isConsecutive([5, 8, 6, 3, 4, 2, 7]);
isConsecutive([5, 9, 6, 4, 1, 8, 3]);
isConsecutive("abc");
