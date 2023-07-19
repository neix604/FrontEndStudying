/* const currYear = 2023;
let birthYear = prompt("태어난 연도를 입력하세요.");
let age;

age = currYear - birthYear;
let str;
if (age >= 19) {
    str = "성인입니다.";
} else {
    str = "성인이 아닙니다.";
}

alert(`당신의 나이는 ${age}세이고, ${str}`); */



/* const currYear = 2023;
let birthYear = prompt('태어난 연도를 입력하세요. (yyyy)');
let age = currYear - birthYear; 202

if (birthYear === '') {
    alert('입력된 값이 없습니다.');
} else if (birthYear.length != 4) {
    alert('잘못 입력했습니다.');
} else {
    alert(`당신은 ${age}세입니다.`);
} */


let dice = prompt('1부터 6 중의 숫자를 골라주세요.');

switch (parseInt(dice)) {
    case 1:
        alert('1을 골랐습니다.');
        break;

    case 2:
        alert('2를 골랐습니다.');
        break;

    case 3:
        alert('3을 골랐습니다.');
        break;

    case 4:
        alert('4를 골랐습니다.');
        break;

    case 5:
        alert('5를 골랐습니다.');
        break;

    case 6:
        alert('6을 골랐습니다.');
        break;

    default:
        alert('잘못 입력하셨습니다.');
}