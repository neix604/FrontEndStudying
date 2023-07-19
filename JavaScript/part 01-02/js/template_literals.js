let userName = '홍길동';
let userAge = 27;

function myTag(str, name, age) {
    return name + str[1] + age + str[2];
}

let output = myTag`${userName}은 ${userAge}세입니다.`;
console.log(output);