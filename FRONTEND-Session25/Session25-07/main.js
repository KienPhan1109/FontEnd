function inputArray() {
    return a = prompt("Nhập vào chuỗi bất kỳ");
}
function isPalindrome(a) {
    let b = a;
    let c = b.split('').reverse().join('');
    if (c === a) {
        return `Là chuỗi đối xứng`;
    }
    else {
        return `Không phải chuỗi đối xứng`;
    }
}
console.log(isPalindrome(inputArray()));
