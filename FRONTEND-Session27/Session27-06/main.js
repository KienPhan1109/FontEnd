function isPlusNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log("Dữ liệu không hợp lệ!");
        return false;
    }

    let diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            console.log("Không phải là cấp số cộng");
            return false;
        }
    }

    console.log("Là cấp số cộng");
    return true;
}

isPlusNumber([2, 4, 6, 8]);
isPlusNumber([3, 6, 9, 12, 14]);
isPlusNumber("abc");
