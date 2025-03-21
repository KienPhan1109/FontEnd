let a = [];
let sumOdd = 0;
let sumPrime = 0;
let arrayOdd = [];
let arrayPrime = [];
let maxValue, minValue;
let posMax = 0;
let posMin = 0;

while (true) {
    console.log("\n============================== MENU ==============================");
    console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần");
    console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng ");
    console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Xóa một phần tử theo giá trị");
    console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần");
    console.log("0. Thoát");
    console.log("==================================================================");

    let choice = Number(prompt("Lựa chọn của bạn: "));

    if (isNaN(choice)) {
        console.log("Vui lòng nhập số!");
        continue;
    }

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập vào số phần tử trong mảng: "));
            if (isNaN(n) || n <= 0) {
                console.log("Số phần tử phải là số nguyên dương!");
                break;
            }
            a = new Array(n);
            for (let i = 0; i < n; i++) {
                a[i] = Number(prompt(`Nhập vào phần tử thứ ${i + 1}:`));
            }
            console.log("Nhập mảng thành công!");
            break;

        case 2:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
            } else {
                console.log(`Mảng hiện tại: ${a}`);
            }
            break;

        case 3:
            sumOdd = 0;
            arrayOdd = [];
            for (let i = 0; i < a.length; i++) {
                if (a[i] % 2 === 0) {
                    sumOdd += a[i];
                    arrayOdd.push(a[i]);
                }
            }
            if (arrayOdd.length > 0) {
                arrayOdd.sort((x, y) => y - x);
                console.log(`Các phần tử là số chẵn đã được sắp xếp giảm dần: ${arrayOdd}`);
                console.log(`Tổng các phần tử là số chẵn: ${sumOdd}`);
            } else {
                console.log("Không có số chẵn trong mảng!");
            }
            break;

        case 4:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            maxValue = a[0];
            minValue = a[0];
            for (let i = 0; i < a.length; i++) {
                if (a[i] > maxValue) {
                    maxValue = a[i];
                    posMax = i;
                }
                if (a[i] < minValue) {
                    minValue = a[i];
                    posMin = i;
                }
            }
            console.log(`Giá trị lớn nhất trong mảng là: ${maxValue} và vị trí là: ${posMax}`);
            console.log(`Giá trị nhỏ nhất trong mảng là: ${minValue} và vị trí là: ${posMin}`);
            break;

        case 5:
            sumPrime = 0;
            arrayPrime = [];
            for (let i = 0; i < a.length; i++) {
                let isPrime = true;
                if (a[i] < 2) {
                    isPrime = false;
                } else {
                    for (let j = 2; j * j <= a[i]; j++) {
                        if (a[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                if (isPrime) {
                    arrayPrime.push(a[i]);
                    sumPrime += a[i];
                }
            }
            if (arrayPrime.length > 0) {
                console.log(`Các phần tử là số nguyên tố: ${arrayPrime}`);
                console.log(`Tổng các phần tử là số nguyên tố: ${sumPrime}`);
            } else {
                console.log("Không có số nguyên tố trong mảng!");
            }
            break;

        case 6:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            let searchValue = Number(prompt("Nhập vào số cần thống kê: "));
            let countValue = 0;

            if (isNaN(searchValue)) {
                console.log("Vui lòng nhập số!");
                continue;
            }
            else {
                for (let i = 0; i < a.length; i++) {
                    if (searchValue === a[i]) {
                        countValue++;
                    }
                }
                if (countValue > 0) {
                    console.log(`${searchValue} xuất hiện ${countValue} lần trong mảng.`);
                }
                else {
                    console.log(`Số ${searchValue} không xuất hiện trong mảng.`);
                }
            }
            break;

        case 7:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            let posValue = Number(prompt("Nhập vào vị trí cần thêm: "));
            if (isNaN(posValue) || posValue < 0 || posValue > a.length) {
                console.log("Dữ liệu không hợp lệ!");
                continue;
            }
            
            let addValue = Number(prompt("Nhập vào giá trị cần thêm: "));
            if (isNaN(addValue)) {
                console.log("Dữ liệu không hợp lệ!");
                continue;
            }

            a.splice(posValue, 0, addValue);
            console.log(`Mảng sau khi thêm: ${a}`);
            break;
        
        case 8:
            let found = true;
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            let posDel = 0;
            let delValue = Number(prompt("Nhập vào giá trị cần xóa: "));
            if (isNaN(delValue)) {
                console.log("Dữ liệu không hợp lệ!");
                continue;
            }
            for (let i = 0; i < a.length; i++) {
                if (delValue === a[i]) {
                    posDel = i;
                    found = true;
                    break;
                }
                else {
                    found = false;
                }
            }
            if (found) {
                a.splice(posDel, 1);
                console.log(`Mảng sau khi xóa: ${a}`);
            }
            else {
                console.log("Giá trị cần xóa không tồn tại trong mảng!");
            }
            break;

        case 9:
            if (a.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
                break;
            }
            console.log("MENU SẮP XẾP");
            console.log("1. Tăng dần");
            console.log("2. Giảm dần");
            
            let sortChoice = Number(prompt("Nhập vào lựa chọn sắp xếp:"));

            switch (sortChoice) {
                case 1:
                    a.sort((x, y) => x - y);
                    console.log(`Mảng sau khi sắp xếp tăng dần: ${a}`);
                    break;
            
                case 2:
                    a.sort((x, y) => y - x);
                    console.log(`Mảng sau khi sắp xếp giảm dần: ${a}`);
                    break;

                default:
                    console.log("Lựa chọn không hợp lệ!");
                    break;
            }
            break;

        case 0:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

    if (choice === 0) break;
}