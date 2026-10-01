//          LOOPS

/*
    - Là thao tác lặp đi lặp lại đoạn code nào đó
    - Có 3 loại vòng lặp:
        + For
        + While
        + Do - While
*/

// 1. For : là vòng lặp mà ta biết trước số lần lặp, 1 vòng lặp for gồm 3 phần (khởi tạo biến; điều kiện dừng; biểu thức tăng/giảm biến đếm)
/* 
    Cú pháp: 
        for (khởi tạo biến; điều kiện dừng; biểu thức tăng/giảm biến đếm) {
            code của bạn;
        }
*/
for (let i = 1;i <= 10;i++) {
    console.log(`Lap lan thu ${i}`);
}

// 2. While : là vòng lặp mà ta k biết trước số lần lặp, 1 vòng lặp 2 phần (điều kiện lặp; biểu thức trong vòng lặp)
/* 
    while (điều kiện lặp) {
        các biểu thức;
    }
*/
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 3. Do - While : 
do {
    console.log(i);
    i++;
}
while (i <= 10)

// 4. Break : dùng để thoát ra khỏi vòng lặp, bỏ tất cả vòng lặp sau đó
for (let i = 1;i <= 10;i++) {
    if (i == 4) break;
    console.log(`Lap lan thu ${i}`);
}

// 5. Continue : bỏ qua vòng lặp hiện tại để thực hiện các vòng lặp sau đó
for (let i = 1;i <= 10;i++) {
    if (i % 2) continue;
    console.log(`Lap lan thu ${i}`);
}