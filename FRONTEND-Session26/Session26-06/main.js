function convertDates(arr) {

    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ!";
    }

    if (arr.length === 0) {
        return "Mảng không có phần tử nào!";
    }

    let result = arr.map((dateString) => {
        let date = new Date(dateString);
        if (isNaN(date.getTime())) return null;

        let day = String(date.getDate()).padStart(2, "0");
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let year = date.getFullYear();

        return `${day}/${month}/${year}`;
    });

    if (result.includes(null)) return "Dữ liệu không hợp lệ!";

    return result;
}

console.log(convertDates(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(convertDates([]));
console.log(convertDates("abc"));
