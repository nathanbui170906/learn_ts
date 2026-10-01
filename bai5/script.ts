//          FUNCTIONS

/*
    - Là tập hợp 1 khối code có thể đọc/dùng và tái sử dụng đc, cũng tương tự như JS nhưng TS có quy định về type của biến (variables) và function
    - Có 2 loại hàm: hàm trả về giá trị và hàm k trả về giá trị (void)
    - Có 2 cách khai báo hàm:
        + Function declaration (truyền thống)
        + Arrow function
*/

// Function declaration
function sum(a: number,b: number): number {
    return a + b;
}
console.log(sum(3,6));

// Arrow function
const say = (s: string): void => {
    console.log(`Hi, I'm ${s}`);
};
say('Nathan');

// Tham số trong hàm có thể k cần gán kiểu DL (nhưng vẫn nên thì hơn)
// Rest parameters : 1 function chỉ có 1 tham số duy nhất, nó phải là tham số cuối cùng và dùng với array type
let nums: number[] = [1,2,3,4,5,6,7,8,9,10];

const sumOfArr = (...numbers: number[]): number => {
    let res = 0;
    numbers.forEach((n) => {
        res += n;
    });
    return res;
};
console.log(sumOfArr(3,6,9));

const mulOfArr = (...numbers: number[]): number => {
    let res = numbers.reduce((accumulator,curVal,curIdx,numbers) => {
        return curVal * accumulator;
    },1);
    return res;
};
console.log(mulOfArr(...nums));