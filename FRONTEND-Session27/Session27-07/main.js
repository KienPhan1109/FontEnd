function isConsecutive(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log("Dữ liệu không hợp lệ!");
        return false;
    }
    let found = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            console.log(arr[i - 1] + 1);
            found = 1;
        }
    }

    if (found === 0) console.log("Là dãy số liên tiếp");
    return true;
}

isConsecutive([1, 2, 3, 5]);
isConsecutive([1, 2, 4, 5]);
isConsecutive("abc");
