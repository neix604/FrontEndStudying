function getInfo(callback) {
    let userName = prompt('이름을 입력하세요.', '홍길동');
    let userAge = ~~[prompt('나이를 입력하세요.', '27')];
    callback(userName, userAge);
}
function intro(a, b, c) {
    alert(`이름은 ${a}이고, 나이는 ${b}살입니다.`);
}

getInfo(intro);