//          IF/ELSE & SWITCH CASE

// 1. If/Else : nếu điều kiện có giá trị là true thì sẽ thực hiện các lệnh bên trong khối if, ngược lại thì sẽ thực hiện các lệnh bên trong khối else
let age = 17;
if (age >= 18) {
    console.log(`Đã đủ tuổi đi tù!`);
}
else {
    console.log(`Đi trại giáo dưỡng!`);
}

// 2. Switch case : khi có quá nhiều lần if/else thì code sẽ rất khó đọc, khi đó dùng switch case sẽ giúp code của chúng ta đc tường minh hơn
let num: number = 75;
switch (num) {
    case 75:
        console.log(`Hue City`);
        break;
    case 29:
        console.log(`Ha Noi City`);
        break;
    case 36:
        console.log(`Thanh Hoa Province`);
        break;
    case 37:
        console.log(`Nghe An Province`);
        break;
    case 38:
        console.log(`Ha Tinh Province`);
        break;
    default:
        console.log(`Not in Vietnam`);
}