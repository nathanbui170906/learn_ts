//          VARIABLES & DATA TYPES

/*
    - TS có 2 kiểu DL:
        + Nguyên thủy (Primitive) : string, number, boolean, null, undefined, symbol, bigint
        + Tham chiếu: objects, array, functions
    - Cú pháp:
        let/const tên_biến: kiểu_DL = giá_trị;
    - Nếu k có kiểu DL thì TS sẽ tự gán type cho biến đó
    - Tên kiểu DL thường sẽ khai báo kiểu DL, còn viết hoa sẽ tạo 1 class
*/

// 1. Kiểu number
const n1 = 3.6;
let n2: number = 10;
console.log(`${n1} ${n2}`);

// 2. Kiểu string
const s1 = "abc";
let s2: string = "Nathan";
console.log(`${s1} ${s2}`);

// 3. Kiểu boolean
const b1 = false;
let b2: boolean = true;
console.log(`${b1} ${b2}`);

// 4. Kiểu object
const profile: {
    id: number,
    name: string,
    birth: number,
    hometown: string,
    zodiac: string,
} = {
    id: 1,
    name: "Nathan",
    birth: 2006,
    hometown: "Hue City",
    zodiac: "Virgo",
}
console.log(`${profile.id} ${profile.name} ${profile.birth} ${profile.hometown} ${profile.zodiac}`);

// 5. Kiểu array
let arr1: string [] = ["Messi","Suarez","Neymar"];
console.log(arr1);
let arr2: (string | number) [] = ["Messi",10,"Suarez",9,"Neymar",11]; // Mix types (DL1 | DL2 | ... | DLn)
console.log(arr2);

// 6. Kiểu tuple : hoạt động như array, số phần tử cần đc khai báo trước (k cần giống nhau) và thứ tự của chúng rất quan trọng, tham số optional phải đặt cuối cùng
let languages: [string,number,boolean?] = ["CPP",10];
console.log(languages);

// 7. Kiểu enum (enumerated) : là 1 nhóm các giá trị hằng số
enum status1 {"Pending","Success","Failed"};
console.log(status1);

// 8. Kiểu Any Type : khi cần lưu giá trị của biến nhưng k chắc chắn về kiểu DL của biến đó, k khuyến khích dùng
let a1: any = "Eric";
a1 = 3.6;
a1 = false;

// 9. Kiểu Void Type : khi tạo 1 hàm k trả về kiểu DL gì thì TS sẽ xem đó là kiểu void, function vẫn chạy hết
const say = (messages: string): void => {
    console.log(messages);
};
say("Cyka Blyat");

// 10. Kiểu Never Type : khá giống void, nhưng function k bao giờ chạy xong, thường dùng để xử lý exception
// const shout = (errorMessages: string): never => {
//     throw new Error(errorMessages);
    
// };
// shout("Global Ban");

// 11. Kiểu Union Type : 1 biến có thể nhận 1 hay nhiều kiểu DL (hữu ích khi định nghĩa trạng thái)
let status2: string | number;
status2 = "Success";
status2 = 69;

// 12. Kiểu Aliases Type : đặt tên cho 1 kiểu DL bằng từ khóa type
type userName = string;
let newName: userName = "Nathan";
console.log(newName);