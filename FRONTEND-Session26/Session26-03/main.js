function filterEmail(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ!";
    }

    const validEmails = arr.filter(
        (email) =>
            typeof email === "string" &&
            email.includes("@") &&
            !email.includes(" ")
    );

    return validEmails.length > 0 ? validEmails : "Danh sách email trống!";
}

console.log(
    filterEmail([
        "john.doe@gmail.com",
        "invalid email.com",
        "hello@domain.net",
        "space @out.com",
    ])
);
console.log(filterEmail([]));
console.log(filterEmail("abc"));
