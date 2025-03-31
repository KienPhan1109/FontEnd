function isEvenNumber(a) {
    let evenNumber = [];
    if (!Array.isArray(a)) {
        return `Dữ liệu không hợp lệ`;
    }
    for (let i = 0; i < a.length; i++) {
        if (isNaN(a[i])) {
            return `Dữ liệu không hợp lệ`;
        }
        if (a[i] % 2 === 0) {
            evenNumber.push(a[i]);
        }
    }
    if (evenNumber.length === 0) {
        return "Mảng không chứa số chẵn";
    }
    else {
        return evenNumber.join(", ");
    }
}

console.log(isEvenNumber([11, 4, 65, 6]));
console.log(isEvenNumber([1, 3, 5, 17]));
console.log(isEvenNumber("text"));
