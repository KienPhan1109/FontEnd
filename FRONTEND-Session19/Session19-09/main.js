let result = "javascript" + 5; 
console.log(result); // "javascript5"
// Toán tử `+` với chuỗi sẽ thực hiện nối chuỗi nên "javascript" + 5 trở thành "javascript5".

result = "javascript" - 1; 
console.log(result); // NaN
// Toán tử `-` không thể áp dụng cho chuỗi, nên JavaScript cố gắng chuyển đổi "javascript" thành số nhưng thất bại, kết quả là NaN.

result = "3" + 2; 
console.log(result); // "32"
// Toán tử `+` với chuỗi sẽ thực hiện nối chuỗi nên "3" + 2 trở thành "32".

result = "5" - 4; 
console.log(result); // 1
// Chuỗi "5" được JavaScript tự động chuyển thành số 5, sau đó thực hiện phép trừ 5 - 4, kết quả là 1.

result = isNaN("123"); 
console.log(result); // false
// "123" có thể chuyển thành số 123, nên không phải NaN, do đó isNaN("123") trả về false.

// 6. let result = isNaN("hello");
result = isNaN("hello"); 
console.log(result); // true
// "hello" không thể chuyển thành số hợp lệ, do đó isNaN("hello") trả về true.

result = Number.isNaN("123"); 
console.log(result); // false
// "123" là một chuỗi, nhưng Number.isNaN() chỉ trả về true nếu đối số thực sự là NaN. Vì "123" không phải NaN nên kết quả là false.

result = Number.isNaN(NaN); 
console.log(result); // true
// NaN thực sự là Not-a-Number, nên Number.isNaN(NaN) trả về true.
